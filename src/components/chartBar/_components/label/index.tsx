import style from './index.module.css';
import { Expand, Trash2 } from 'lucide-react';

export function Label() {
    return (
        <div className={style.label}>
            <h3>Nome do Grafico</h3>
            <div className={style.options}>
                <button>{<Expand className={style.icon} color='#262626' />}</button>
                <button>{<Trash2 className={style.icon} color='#262626' />}</button>
            </div>
        </div>
    );
}