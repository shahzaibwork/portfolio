import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const icons = [
    {
        Icon: FaReact,
        className: "-top-3 left-1/2 -translate-x-1/2 text-cyan-400",
        delay: 0,
    },
    {
        Icon: FaNodeJs,
        className: "top-1/2 -right-3 -translate-y-1/2 text-green-500",
        delay: 0.5,
    },
    {
        Icon: SiMongodb,
        className: "-bottom-3 left-1/2 -translate-x-1/2 text-green-400",
        delay: 1,
    },
    {
        Icon: FaDocker,
        className: "top-1/2 -left-3 -translate-y-1/2 text-blue-400",
        delay: 1.5,
    },
];

const FloatingIcons = () => {
    return (
        <>
            {icons.map(({ Icon, className, delay }, index) => (
                <motion.div
                    key={index}
                    className={`absolute z-30 ${className}`}
                    animate={{
                        y: [0, -12, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 3,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-full border border-slate-700 shadow-xl">
                        <Icon className="text-4xl" />
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default FloatingIcons;