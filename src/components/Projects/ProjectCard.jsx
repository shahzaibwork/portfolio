import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import GlassCard from "../GlassCard/GlassCard";


const ProjectCard = ({ project, index }) => {

    return (

        <motion.div

            whileHover={{
                y: -10
            }}

            transition={{
                duration: 0.3
            }}

        >

            <GlassCard

                className="
                    overflow-hidden
                    group
                    hover:border-blue-500
                    transition-all
                    duration-300
                "

            >


                {/* Browser Header */}

                <div
                    className="
                    bg-slate-800
                    border-b
                    border-slate-700
                    px-4
                    py-3
                    flex
                    items-center
                    justify-between
                    "
                >

                    <div className="flex gap-2">

                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />

                    </div>


                    <span
                        className="
                        text-xs
                        text-slate-400
                        truncate
                        max-w-[120px]
                        "
                    >
                        {project.title}
                    </span>


                    <span
                        className="
                        text-blue-400
                        text-xs
                        font-semibold
                        "
                    >
                        {String(index).padStart(2, "0")}
                    </span>


                </div>



                {/* Image */}

                <div
                    className="
                    relative
                    h-52
                    sm:h-64
                    overflow-hidden
                    "
                >

                    {project.image ? (

                        <img

                            src={project.image}

                            alt={`${project.title} screenshot`}

                            loading="lazy"

                            className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-110
                            transition
                            duration-700
                            "

                        />

                    ) : (

                        <div
                            className="
                            flex
                            items-center
                            justify-center
                            h-full
                            bg-slate-950
                            text-slate-500
                            text-sm
                            "
                        >
                            Screenshot Coming Soon
                        </div>

                    )}

                </div>




                {/* Content */}

                <div className="p-6">


                    <h3
                        className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                        "
                    >
                        {project.title}
                    </h3>



                    <p
                        className="
                        text-slate-400
                        mt-4
                        leading-7
                        "
                    >

                        {project.description}

                    </p>




                    {/* Technologies */}

                    <div
                        className="
                        flex
                        flex-wrap
                        gap-2
                        mt-6
                        "
                    >

                        {project.technologies?.map((tech) => (

                            <span

                                key={tech}

                                className="
                                px-3
                                py-1.5
                                rounded-full
                                bg-slate-800
                                border
                                border-slate-700
                                text-blue-300
                                text-xs
                                sm:text-sm
                                hover:bg-blue-600
                                hover:text-white
                                transition
                                "

                            >

                                {tech}

                            </span>

                        ))}

                    </div>




                    {/* Buttons */}

                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                        mt-8
                        "
                    >


                        <a

                            href={project.github}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="
                            flex-1
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-blue-600
                            hover:bg-blue-700
                            py-3
                            rounded-xl
                            font-medium
                            transition
                            "

                        >

                            <FaGithub />

                            GitHub

                        </a>




                        {project.live ? (

                            <a

                                href={project.live}

                                target="_blank"

                                rel="noopener noreferrer"

                                className="
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                border
                                border-slate-700
                                hover:border-blue-500
                                hover:bg-slate-800
                                py-3
                                rounded-xl
                                transition
                                "

                            >

                                <FaExternalLinkAlt />

                                Live Demo

                            </a>


                        ) : (

                            <button

                                disabled

                                className="
                                flex-1
                                py-3
                                rounded-xl
                                border
                                border-slate-700
                                text-slate-500
                                cursor-not-allowed
                                "

                            >

                                Coming Soon

                            </button>

                        )}


                    </div>


                </div>


            </GlassCard>


        </motion.div>

    );
};


export default ProjectCard;