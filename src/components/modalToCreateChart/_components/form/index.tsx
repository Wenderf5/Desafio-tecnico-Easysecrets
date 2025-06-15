import style from './index.module.css';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../store';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toogle } from '../../../../store/slices/modalToCreateChartIsVisibleSlice';
import { addChart, data } from '../../../../store/slices/chartsSlice';
import { v4 as uuidv4 } from 'uuid';

interface formDataInterface {
    chartName: string;
    file: FileList;
}

export function Form() {
    const dispatch = useDispatch<AppDispatch>();
    const [invalidJson, setInvalidJson] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<formDataInterface>();
    const file = watch('file');

    useEffect(() => {
        setInvalidJson(false);
    }, [file]);

    function parseFileToJson(file: File): Promise<data[]> {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                try {
                    const json = JSON.parse(event.target?.result as string);

                    if (!Array.isArray(json)) throw new Error("Formato do JSON inválido!");

                    const isValid: boolean = json.every((item) =>
                        typeof item === 'object' &&
                        item !== null &&
                        typeof item.produto === 'string' &&
                        Array.isArray(item.vendas) &&
                        item.vendas.every((v: any) =>
                            typeof v.mes === 'string' &&
                            typeof v.quantidade === 'number'
                        ));

                    if (!isValid) throw new Error("Formato do JSON inválido!");

                    resolve(json);
                } catch (error) {
                    setInvalidJson(true);
                }
            }

            reader.readAsText(file);
        });
    }

    const onSubmit = async (data: formDataInterface) => {
        const { chartName, file } = data;
        const json = await parseFileToJson(file[0]);

        dispatch(addChart({ id: uuidv4(), chartName: chartName, data: json }));
        dispatch(toogle());
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputName}>
                <label>Nome do gráfico:</label>
                <input
                    type="text"
                    placeholder="Digite o nome do gráfico..."
                    {...register('chartName', { required: 'O nome do gráfico é obrigatório' })}
                />
                {errors.chartName && <p style={{ color: '#FF5E5E' }}>{errors.chartName.message}</p>}
            </div>

            <div className={style.inputFile}>
                <label>Selecionar arquivo:</label>
                <div className={style.fileWrapper}>
                    <label htmlFor="inputFile">Escolher arquivo</label>
                    <span>
                        {file && file.length > 0 ? file[0].name : "nenhum arquivo selecionado"}
                    </span>
                    <input
                        id="inputFile"
                        type="file"
                        accept=".json"
                        style={{ display: 'none' }}
                        {...register('file', {
                            required: 'O arquivo JSON é obrigatório'
                        })}
                    />
                </div>
                {errors.file && <p style={{ color: '#FF5E5E' }}>{errors.file.message}</p>}
                {invalidJson && <p style={{ color: '#FF5E5E' }}>Fomato do JSON invalido</p>}
            </div>
            <div className={style.containerSubmit}>
                <button className={style.buttonCancel} type="button" onClick={() => dispatch(toogle())}>Cancelar</button>
                <button className={style.buttonCreate} type="submit">Criar</button>
            </div>
        </form>
    );
}
