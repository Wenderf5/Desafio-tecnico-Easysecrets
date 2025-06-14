import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";
import { ModalToCreateCharts } from "../../components/modalToCreateCharts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChartLine } from "../../components/chartLine";
import { PlaceHolder } from "./_components/placeHoler";

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
                <div className={charts.length <= 0 ? style.containerOfChartsEmpty : style.containerOfCharts}>
                    {charts.length <= 0 ? <PlaceHolder /> :
                        charts.map((chart) => (
                            <ChartLine key={chart.id} chart={chart} />
                        ))
                    }
                </div>
            </main>
        </>
    );
}
