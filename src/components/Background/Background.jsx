import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">

            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

            <motion.div
                animate={{
                    x: [0, 60, -30, 0],
                    y: [0, -40, 40, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
            />

            <motion.div
                animate={{
                    x: [0, -50, 40, 0],
                    y: [0, 50, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"
            />

        </div>
    );
};

export default Background;