import style from './index.module.css';
import { Label } from './_components/label';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ChartBar() {
    const data = [
        {
            name: 'Page A',
            uv: 400,
            pv: 400,
            amt: 400,
        },
        {
            name: 'Page B',
            uv: 300,
            pv: 398,
            amt: 210,
        },
        {
            name: 'Page C',
            uv: 200,
            pv: 800,
            amt: 290,
        },
        {
            name: 'Page D',
            uv: 780,
            pv: 908,
            amt: 200,
        },
        {
            name: 'Page E',
            uv: 890,
            pv: 800,
            amt: 181,
        },
        {
            name: 'Page F',
            uv: 390,
            pv: 800,
            amt: 500,
        },
        {
            name: 'Page G',
            uv: 490,
            pv: 300,
            amt: 100,
        },
        {
            name: 'Page A',
            uv: 400,
            pv: 400,
            amt: 400,
        },
        {
            name: 'Page B',
            uv: 300,
            pv: 398,
            amt: 210,
        },
        {
            name: 'Page C',
            uv: 200,
            pv: 800,
            amt: 290,
        },
        {
            name: 'Page D',
            uv: 780,
            pv: 908,
            amt: 200,
        },
        {
            name: 'Page E',
            uv: 890,
            pv: 800,
            amt: 181,
        },
        {
            name: 'Page F',
            uv: 390,
            pv: 800,
            amt: 500,
        },
        {
            name: 'Page G',
            uv: 490,
            pv: 300,
            amt: 100,
        },
    ];

    return (
        <div className={style.containerOfChart}>
            <Label />
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart
                    data={data}
                    margin={{ left: -10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}