import style from './index.module.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { Label } from './_components/label';
import { chartInterface } from '../../store/slices/chartsSlice';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

interface props {
    chart: chartInterface
}

export function ChartLine({ chart }: props) {
    const fullScreenIsVisible = useSelector((state: RootState) => state.fullScreen.visible);

    function generateColor(index: number): string {
        const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF4081'];
        return colors[index % colors.length];
    }

    function loadChartData() {
        const meses = new Set<string>();
        chart.data.forEach(produto => {
            produto.vendas.forEach(v => meses.add(v.mes));
        });

        const data: any[] = Array.from(meses).map(mes => {
            const entry: any = { name: mes };
            chart.data.forEach(produto => {
                const venda = produto.vendas.find(v => v.mes === mes);
                entry[produto.produto] = venda ? venda.quantidade : 0;
            });
            return entry;
        });
        return data;
    }

    const dataOfChart = loadChartData();

    return (
        <div className={style.containerOfChart}>
            <Label chart={chart} />
            <ResponsiveContainer width={"100%"} aspect={fullScreenIsVisible ? 2.2 : 2}>
                <LineChart data={dataOfChart} margin={{ left: -20 }}>
                    {chart.data.map((item, index) => (
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={item.produto}
                            stroke={generateColor(index)}
                        />
                    ))}
                    <CartesianGrid stroke={'#3E3E55'} strokeDasharray={"5 5"} />
                    <XAxis dataKey="name" stroke={'#B0B0B0'} />
                    <YAxis stroke={'#B0B0B0'} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div >
    )
}