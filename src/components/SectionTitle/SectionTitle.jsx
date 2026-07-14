import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <p className="text-blue-400 uppercase tracking-[4px] font-semibold text-sm mb-3">
                {subtitle}
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                {title}
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-5"></div>
        </motion.div>
    );
};

export default SectionTitle;