// components/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center"
            >
                {/* Outer Ring */}
                <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>

                {/* Logo Icon in Center */}
                <div className="absolute font-bold text-2xl text-blue-600">A</div>
            </motion.div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-xl font-semibold tracking-widest text-slate-800 uppercase"
            >
                Acadex
            </motion.h2>
            <p className="text-slate-400 text-sm mt-1 tracking-tighter">Empowering Education</p>
        </div>
    );
};

export default Loader;