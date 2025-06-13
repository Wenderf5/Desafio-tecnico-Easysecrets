import style from './index.module.css';

interface props {
    label: string
}

export function CheckBox({ label }: props) {
    return (
        <div className={style.container}>
            <input type="checkbox" />
            <label htmlFor="">{label}</label>
        </div>
    )
}