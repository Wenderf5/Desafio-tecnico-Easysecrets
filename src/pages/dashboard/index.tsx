import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";

export function Dashboard() {
    return (
        <>
            <main className={style.main}>
                <AddChartButton />
            </main>
        </>
    );
}
