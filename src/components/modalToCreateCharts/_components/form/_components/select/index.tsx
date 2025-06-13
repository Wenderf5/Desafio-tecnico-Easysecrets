import style from './index.module.css';

export interface option {
    id: number,
    value: string,
    name: string
}

interface props {
    label: string,
    placeHolder: string,
    options: option[]
}

export function Select({ label, placeHolder, options }: props) {
    return (
        <div className={style.container}>
            <label>{label}</label>
            <select>
                <option value="" disabled selected>{placeHolder}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}