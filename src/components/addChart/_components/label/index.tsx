import style from './index.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface props {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Label({ isOpen, setIsOpen }: props) {
    return (
        <p
            className={style.LabelText}
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
            Adicionar novo gráfico
        </p>
    );
}