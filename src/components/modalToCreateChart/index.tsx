import style from './index.module.css';
import { Label } from './_components/label';
import { Form } from './_components/form';

export function ModalToCreateChart() {
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <Label />
                <Form />
            </div>
        </div>
    );
}