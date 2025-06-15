import style from './index.module.css';
import { ChartLine } from '../chartLine';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

export function FullScreenChart() {
    const chart = useSelector((state: RootState) => state.fullScreen.chart);

    return (
        <div className={style.overlay}>
            <ChartLine chart={chart!} />
        </div>
    );
}
