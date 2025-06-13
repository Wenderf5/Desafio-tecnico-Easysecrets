import style from './index.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Label } from './_components/label';

export function ChartLine() {
    const data = [
        { name: 'Page A', uv: 400, pv: 600, amt: 2400 },
        { name: 'Page B', uv: 200, pv: 100, amt: 2400 },
        { name: 'Page C', uv: 300, pv: 300, amt: 2400 },
        { name: 'Page D', uv: 100, pv: 200, amt: 2400 },
        { name: 'Page E', uv: 600, pv: 400, amt: 2400 },
        { name: 'Page F', uv: 400, pv: 600, amt: 2400 },
        { name: 'Page J', uv: 200, pv: 100, amt: 2400 },
        { name: 'Page K', uv: 300, pv: 300, amt: 2400 },
        { name: 'Page L', uv: 100, pv: 200, amt: 2400 },
        { name: 'Page M', uv: 600, pv: 400, amt: 2400 }
    ];

    return (
        <div className={style.containerOfChart}>
            <Label />
            <ResponsiveContainer width={'100%'} height={200}>
                <LineChart data={data} margin={{ left: -20 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="green" />
                    <CartesianGrid stroke="#262626" strokeDasharray="5 5" />
                    <XAxis dataKey="name" stroke="#262626" />
                    <YAxis stroke="#262626" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}