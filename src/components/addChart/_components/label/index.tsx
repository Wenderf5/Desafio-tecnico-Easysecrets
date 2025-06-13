import style from './index.module.css';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';

export function Label() {
    return (
        <p className={style.LabelText}>
            <ChevronDown /> Adicionar nova gráfico
        </p>
    );
}