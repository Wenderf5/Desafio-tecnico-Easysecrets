import style from './index.module.css';
import icon from '../../../../assets/icon.svg';

export function PlaceHolder() {
    return (
        <div className={style.placeHolder}>
            <img src={icon} />
            <h3>Você ainda não tem graficos</h3>
            <p>Crie seu primeiro gráfico para comerçar<br />
                a usar corretamente seu painel!</p>
        </div>
    )
}