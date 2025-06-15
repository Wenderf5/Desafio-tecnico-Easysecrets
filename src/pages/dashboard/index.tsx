import style from "./index.module.css";
import { AddChartButton } from "../../components/addChartButton";
import { ModalToCreateChart } from "../../components/modalToCreateChart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChartLine } from "../../components/chartLine";
import { PlaceHolder } from "./_components/placeHoler";
import { FullScreenChart } from "../../components/fullScreenChart";

export function Dashboard() {
    const modalToCreateChartIsVisible = useSelector((state: RootState) => state.modalToCreateChartIsVisible);
    const charts = useSelector((state: RootState) => state.charts);
    const fullScreenIsVisible = useSelector((state: RootState) => state.fullScreen.visible);

    return (
        <>
            <main className={style.main}>
                {!fullScreenIsVisible && (
                    charts.length > 0 && (<AddChartButton />)
                )}
                {modalToCreateChartIsVisible && (
                    <ModalToCreateChart />
                )}
                {!fullScreenIsVisible && (
                    <div className={charts.length <= 0 ? style.containerOfChartsEmpty : style.containerOfCharts}>
                        {charts.length <= 0 ? <PlaceHolder /> :
                            charts.map((chart) => (
                                <ChartLine key={chart.id} chart={chart} />
                            ))
                        }
                    </div>
                )}
                {fullScreenIsVisible && (
                    <FullScreenChart />
                )}
            </main>
        </>
    );
}
