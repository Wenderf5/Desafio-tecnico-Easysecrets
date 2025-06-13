import style from './index.module.css';
import { useState } from 'react';
import { Label } from './_components/label';
import { Options } from './_components/options';
import { AnimatePresence, motion } from 'framer-motion';

export function AddChart() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div onClick={() => setOpen(!open)} className={style.addChartContainer}>
            <Label />
            <AnimatePresence>
                {open && (
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