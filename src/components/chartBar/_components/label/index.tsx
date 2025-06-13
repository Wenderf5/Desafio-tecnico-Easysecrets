import style from './index.module.css';
import { Pencil, Expand } from 'lucide-react';

export function Label() {
    return (
        <div className={style.label}>
            <h3>Nome do Grafico</h3>
            <div className={style.options}>
                <button>{<Pencil className={style.icon} color='#262626' />}</button>
                <button>{<Expand className={style.icon} color='#262626' />}</button>
            </div>
        </div>
    );
}