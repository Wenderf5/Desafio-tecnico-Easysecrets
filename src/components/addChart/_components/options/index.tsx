import style from './index.module.css';
import { Option } from './_components/option';
import { ChartLine, ChartArea, ChartColumnBig, ChartPie } from 'lucide-react';


export function Options() {
    return (
        <div className={style.containerOptions}>
            <Option icon={<ChartLine />} label='Gráfico de linha' />
            <Option icon={<ChartArea />} label='Gráfico de area' />
            <Option icon={<ChartColumnBig />} label='Gráfico de barra' />
            <Option icon={<ChartPie />} label='Gráfico de pizza' />
        </div>
    );
}