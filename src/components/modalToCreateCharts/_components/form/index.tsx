import style from './index.module.css';
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../../../store';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toogle } from '../../../../store/slices/visibilityOfModalSlice';
import { addChart, data } from '../../../../store/slices/chartsSlice';

interface formData {
    chartName: string;
    file: FileList;
}

export function Form() {
    const dispatch = useDispatch<AppDispatch>();
    const [invalidJson, setInvalidJson] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<formData>();
    const file = watch('file');

    useEffect(() => {
        setInvalidJson(false);
    }, [file]);

    function parseFileToJson(file: FileList): Promise<data[]> {
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
            };

            reader.readAsText(file[0]);
        });
    }

    const onSubmit = async (data: formData) => {
        const chartName = data.chartName;
        const file = await parseFileToJson(data.file);

        dispatch(addChart({ chartName: chartName, data: file }));
        dispatch(toogle());
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.inputName}>
                <label>Nome do gráfico:</label>
                <input
                    type="text"
                    placeholder="Digite o nome do gráfico..."
                    {...register('chartName', { required: 'O nome do gráfico é obrigatório' })}
                />
                {errors.chartName && <p className={style.error}>{errors.chartName.message}</p>}
            </div>

            <div className={style.inputFile}>
                <label className={style.inputFileLabel}>Selecionar arquivo:</label>
                <div className={style.fileWrapper}>
                    <label htmlFor="inputFile" className={style.fileLabel}>Escolher arquivo</label>
                    <span className={style.fileName}>
                        {file && file.length > 0 ? file[0].name : "nenhum arquivo selecionado"}
                    </span>
                    <input
                        id="inputFile"
                        type="file"
                        accept=".json"
                        className={style.hiddenInputFile}
                        {...register('file', {
                            required: 'O arquivo JSON é obrigatório',
                            validate: (value) => value.length > 0 || 'Selecione um arquivo JSON'
                        })}
                    />
                </div>
                {errors.file && <p className={style.error}>{errors.file.message}</p>}
                {invalidJson && <p className={style.error}>Fomato do JSON invalido</p>}
            </div>

            <div className={style.containerSubmit}>
                <button className={style.buttonCancel} type="button" onClick={() => dispatch(toogle())}>Cancelar</button>
                <button className={style.buttonCreate} type="submit">Criar</button>
            </div>
        </form>
    );
}
