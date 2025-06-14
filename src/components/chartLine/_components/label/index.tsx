import style from './index.module.css';
import { useDispatch } from 'react-redux';
import { Expand, Trash2 } from 'lucide-react';
import { AppDispatch } from '../../../../store';
import { deleteChart } from '../../../../store/slices/chartsSlice';

interface props {
    chartId: string;
    label: string;
}

export function Label({ chartId, label }: props) {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={style.label}>
            <h3>{label}</h3>
            <div className={style.options}>
                <button>{<Expand className={style.icon} color='#E0E0E0' />}</button>
                <button onClick={() => dispatch(deleteChart(chartId))}>{<Trash2 className={style.icon} color='#E0E0E0' />}</button>
            </div>
        </div>
    );
}