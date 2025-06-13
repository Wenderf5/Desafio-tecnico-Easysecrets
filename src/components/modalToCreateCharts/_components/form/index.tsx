import style from './index.module.css';
import { Color } from './_components/color';
import { option, Select } from './_components/select';
import { CheckBox } from './_components/checkBox';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import { enumTypeOfChart } from '../../../../store/slices/visibilityOfModalSlice';

export function Form() {
    const typeOfChart = useSelector((state: RootState) => state.visibilityOfModal.typeOfChart);
    const options: option[] = [
        { id: 1, value: "linha", name: "Linha" },
        { id: 2, value: "traçado", name: "Traçado" },
        { id: 3, value: "pontilhado", name: "Pontilhado" }
    ];

    return (
        <form className={style.form}>
            {typeOfChart === enumTypeOfChart.line && (
                <>
                    <Color
                        label='Cor dos eixos:'
                        defaultValue='#fc0032'
                    />
                    <Select
                        label='Traçado das linhas:'
                        placeHolder='Selecione um estilo'
                        options={options}
                    />
                    <CheckBox
                        label='Grade'
                    />
                    <Color
                        label='Cor das grades:'
                        defaultValue='#39ab2e'
                    />
                    <Select
                        label='Traçado das grades:'
                        placeHolder='Selecione um estilo'
                        options={options}
                    />
                </>
            )}
            <div className={style.containerSubmit}>
                <button className={style.buttonCancel} type='submit'>Cancelar</button>
                <button className={style.buttonCreate} type='submit'>Criar</button>
            </div>
        </form>
    );
}