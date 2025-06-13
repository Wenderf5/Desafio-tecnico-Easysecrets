import { AddChart } from "../../components/addChart";
import style from "./index.module.css";

export function Dashboard() {

    return (
        <>
            <main className={style.main}>
                <AddChart />
            </main>
        </>
    );
}
