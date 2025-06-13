import style from './index.module.css';
import { Label } from './_components/label';
import { Options } from './_components/options';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { toggle } from '../../store/visibilitySlice';

export function AddChart() {
    const visible = useSelector((state: RootState) => state.visibility.visible);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div onClick={() => dispatch(toggle())} className={style.addChartContainer}>
            <Label />
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <Options />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}