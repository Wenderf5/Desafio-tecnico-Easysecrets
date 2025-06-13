import style from './index.module.css';
import { useState } from 'react';
import { Label } from './_components/label';
import { Options } from './_components/options';
import { AnimatePresence, motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { toggle } from '../../store/visibilitySlice';

export function AddChartButton() {
    const [isOpen, setIsOpen] = useState(false);
    // const visible = useSelector((state: RootState) => state.visibility.visible);
    // const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={style.addChartContainer}>
            <Label isOpen={isOpen} setIsOpen={setIsOpen} />
            <AnimatePresence>
                {isOpen && (
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