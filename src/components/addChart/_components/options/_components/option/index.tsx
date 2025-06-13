import style from './index.module.css';
interface props {
    icon: React.ReactNode,
    label: string
}

export function Option({ icon, label }: props) {
    return (
        <button className={style.option}>{label} {icon}</button>
    );
}