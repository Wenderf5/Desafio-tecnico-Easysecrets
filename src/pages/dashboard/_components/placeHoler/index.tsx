import style from './index.module.css';
import icon from '../../../../assets/icon.svg';
import { AddChartButton } from '../../../../components/addChartButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

export function PlaceHolder() {
    const charts = useSelector((state: RootState) => state.charts);

    return (
        <div className={style.placeHolder}>
            <img src={icon} />
            <h3>Você ainda não tem graficos</h3>
            <p>Crie seu primeiro gráfico para comerçar<br />
                a usar corretamente seu painel!</p>
            {charts.length <= 0 && (
                <AddChartButton />
            )}
        </div>
    )
}