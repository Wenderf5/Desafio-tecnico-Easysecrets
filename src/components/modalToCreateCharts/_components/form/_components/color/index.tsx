import style from './index.module.css';

interface props {
    label: string,
    defaultValue: string
}

export function Color({ label, defaultValue }: props) {
    return (
        <div className={style.container}>
            <label>{label}</label>
            <input type="color" defaultValue={defaultValue} />
        </div>
    )
}