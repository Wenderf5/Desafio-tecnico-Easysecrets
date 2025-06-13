import style from "./index.module.css";
import { AddChart } from "../../components/addChart";

export function Dashboard() {

    return (
        <>
            <main className={style.main}>
                <AddChart />
            </main>
        </>
    );
}
