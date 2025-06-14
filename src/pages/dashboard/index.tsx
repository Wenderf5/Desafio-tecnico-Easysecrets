import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";
import { ModalToCreateCharts } from "../../components/modalToCreateCharts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChartLine } from "../../components/chartLine";

export function Dashboard() {
    const visibilityOfModal = useSelector((state: RootState) => state.visibilityOfModal.visible);

    return (
        <>
            <main className={style.main}>
                <AddChartButton />
                {visibilityOfModal && (
                    <ModalToCreateCharts />
                )}
                <div className={style.containerOfCharts}>
                    
                </div>
            </main>
        </>
    );
}
