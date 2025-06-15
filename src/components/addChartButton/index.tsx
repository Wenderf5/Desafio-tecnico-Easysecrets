import style from './index.module.css';
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { toogle } from '../../store/slices/modalToCreateChartIsVisibleSlice';

export function AddChartButton() {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <button
            className={style.button}
            onClick={() => dispatch(toogle())}
        >
            <Plus />
            Adicionar novo gráfico
        </button>
    );
}