import style from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { AppDispatch, RootState } from '../../../../store';
import { chartInterface, deleteChart } from '../../../../store/slices/chartsSlice';
import { setChart, toogle } from '../../../../store/slices/fullScreenSlice';

interface props {
    chart: chartInterface;
}

export function Label({ chart }: props) {
    const fullScreenIsVisible = useSelector((state: RootState) => state.fullScreen.visible);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={style.label}>
            <h3>{chart.chartName}</h3>
            <div className={style.options}>
                <button onClick={() => { dispatch(setChart(chart)); dispatch(toogle()); }}>
                    {fullScreenIsVisible ? <Minimize2 className={style.icon} color='#E0E0E0' /> : <Maximize2 className={style.icon} color='#E0E0E0' />}
                </button>
                {!fullScreenIsVisible && (
                    <button onClick={() => dispatch(deleteChart(chart.id))}>
                        <Trash2 className={style.icon} color='#E0E0E0' />
                    </button>
                )}
            </div>
        </div >
    );
}