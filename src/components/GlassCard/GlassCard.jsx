import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
            className={`
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                shadow-xl
                hover:border-blue-500/50
                transition-all
                duration-300
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;