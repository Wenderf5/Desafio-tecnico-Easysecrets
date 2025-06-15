import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";
import { ModalToCreateCharts } from "../../components/modalToCreateCharts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChartLine } from "../../components/chartLine";
import { PlaceHolder } from "./_components/placeHoler";
import { FullScreenChart } from "../../components/fullScreenChart";

export function Dashboard() {
    const visibilityOfModal = useSelector((state: RootState) => state.visibilityOfModal.visible);
    const charts = useSelector((state: RootState) => state.charts);
    const fullScreen = useSelector((state: RootState) => state.fullScreen);

    return (
        <>
            <main className={style.main}>
                <AddChartButton />
                {visibilityOfModal && (
                    <ModalToCreateCharts />
                )}
                {!fullScreen.visible && (
                    <div className={charts.length <= 0 ? style.containerOfChartsEmpty : style.containerOfCharts}>
                        {charts.length <= 0 ? <PlaceHolder /> :
                            charts.map((chart) => (
                                <ChartLine key={chart.id} chart={chart} />
                            ))
                        }
                    </div>
                )}
                {fullScreen.visible && (
                    <FullScreenChart />
                )}
            </main>
        </>
    );
}
