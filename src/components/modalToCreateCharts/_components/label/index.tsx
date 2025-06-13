import style from './index.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { enumTypeOfChart } from '../../../../store/slices/visibilityOfModalSlice';

export function Label() {
    const typeOfChart = useSelector((state: RootState) => state.visibilityOfModal.typeOfChart);

    return (
        <div className={style.label}>
            {typeOfChart === enumTypeOfChart.line && (
                <h1>Gráfico de linha</h1>
            )}
            {typeOfChart === enumTypeOfChart.area && (
                <h1>Gráfico de area</h1>
            )}
            {typeOfChart === enumTypeOfChart.bar && (
                <h1>Gráfico de barra</h1>
            )}
            {typeOfChart === enumTypeOfChart.pine && (
                <h1>Gráfico de pizza</h1>
            )}
        </div>
    )
}