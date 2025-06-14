import style from './index.module.css';
import { Expand, Trash2 } from 'lucide-react';

interface props {
    label: string;
}

export function Label({ label }: props) {
    return (
        <div className={style.label}>
            <h3>{label}</h3>
            <div className={style.options}>
                <button>{<Expand className={style.icon} color='#E0E0E0' />}</button>
                <button>{<Trash2 className={style.icon} color='#E0E0E0' />}</button>
            </div>
        </div>
    );
}