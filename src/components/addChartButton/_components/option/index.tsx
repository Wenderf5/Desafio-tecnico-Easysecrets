import style from './index.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { open, enumTypeOfChart } from '../../../../store/slices/visibilityOfModalSlice';

interface props {
    icon: React.ReactNode,
    label: string,
    typeOfChart: enumTypeOfChart
}

export function Option({ icon, label, typeOfChart }: props) {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button
            className={style.option}
            onClick={() => dispatch(open(typeOfChart))}
        >
            {label}
            {icon}
        </button>
    );
}