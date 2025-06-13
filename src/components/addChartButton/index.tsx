import style from './index.module.css';
import { useState } from 'react';
import { Option } from './_components/option';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChartLine,
    ChartArea,
    ChartColumnBig,
    ChartPie,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { enumTypeOfChart } from '../../store/slices/visibilityOfModalSlice';

export function AddChartButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.addChartContainer}>
            <p className={style.label} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
                Adicionar novo gráfico
            </p>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className={style.containerOptions}>
                            <Option
                                icon={<ChartLine />}
                                label='Gráfico de linha'
                                typeOfChart={enumTypeOfChart.line}
                            />
                            <Option
                                icon={<ChartArea />}
                                label='Gráfico de area'
                                typeOfChart={enumTypeOfChart.area}
                            />
                            <Option
                                icon={<ChartColumnBig />}
                                label='Gráfico de barra'
                                typeOfChart={enumTypeOfChart.bar}
                            />
                            <Option
                                icon={<ChartPie />}
                                label='Gráfico de pizza'
                                typeOfChart={enumTypeOfChart.pine}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}