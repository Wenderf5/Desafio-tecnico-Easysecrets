import style from './index.module.css';
import { useDispatch } from 'react-redux';
import { Expand, Trash2 } from 'lucide-react';
import { AppDispatch } from '../../../../store';
import { chartInterface, deleteChart } from '../../../../store/slices/chartsSlice';
import { setChart, toogle } from '../../../../store/slices/fullScreenSlice';

interface props {
    chart: chartInterface;
    label: string;
}

export function Label({ chart, label }: props) {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={style.label}>
            <h3>{label}</h3>
            <div className={style.options}>
                <button onClick={() => { dispatch(setChart(chart)); dispatch(toogle()); }}>{<Expand className={style.icon} color='#E0E0E0' />}</button>
                <button onClick={() => dispatch(deleteChart(chart.id))}>{<Trash2 className={style.icon} color='#E0E0E0' />}</button>
            </div>
        </div >
    );
}