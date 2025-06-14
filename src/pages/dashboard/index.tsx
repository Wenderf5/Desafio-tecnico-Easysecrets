import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";
import { ModalToCreateCharts } from "../../components/modalToCreateCharts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChartLine } from "../../components/chartLine";

export function Dashboard() {
    const visibilityOfModal = useSelector((state: RootState) => state.visibilityOfModal.visible);
    const charts = useSelector((state: RootState) => state.charts);

    return (
        <>
            <main className={style.main}>
                <AddChartButton />
                {visibilityOfModal && (
                    <ModalToCreateCharts />
                )}
                <div className={style.containerOfCharts}>
                    {charts.map((chart, index) => (
                        <ChartLine key={index} chart={chart} />
                    ))}
                </div>
            </main>
        </>
    );
}
