import { motion } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaStar,
} from "react-icons/fa";

import GlassCard from "../GlassCard/GlassCard";


const FeaturedProject = ({ project }) => {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 50
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            viewport={{
                once: true
            }}

            transition={{
                duration: 0.7
            }}

        >


            <GlassCard className="overflow-hidden p-8">


                <div className="grid lg:grid-cols-2 gap-12 items-center">



                    {/* LEFT - IMAGE */}


                    <div className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-700
                        group
                    ">


                        {/* Browser Header */}


                        <div className="
                            bg-slate-800
                            border-b
                            border-slate-700
                            px-4
                            py-3
                            flex
                            items-center
                            justify-between
                        ">


                            <div className="flex gap-2">

                                <span className="w-3 h-3 rounded-full bg-red-500" />

                                <span className="w-3 h-3 rounded-full bg-yellow-500" />

                                <span className="w-3 h-3 rounded-full bg-green-500" />

                            </div>



                            <span className="
                                text-xs
                                text-slate-400
                                truncate
                                max-w-[150px]
                            ">

                                {project.title}

                            </span>



                            <span className="
                                text-blue-400
                                text-xs
                                font-semibold
                            ">

                                01

                            </span>


                        </div>





                        {/* Image */}



                        <div className="
                            relative
                            h-72
                            overflow-hidden
                        ">


                            {project.image ? (


                                <>

                                    <img

                                        src={project.image}

                                        alt={`${project.title} featured project`}

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


                                    <div

                                        className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-slate-950/70
                                        via-transparent
                                        opacity-0
                                        group-hover:opacity-100
                                        transition
                                        "

                                    />


                                </>


                            ) : (


                                <div className="
                                    flex
                                    items-center
                                    justify-center
                                    h-full
                                    bg-slate-950
                                    text-slate-500
                                ">

                                    Screenshot Coming Soon


                                </div>


                            )}



                        </div>



                    </div>







                    {/* RIGHT - CONTENT */}



                    <div>



                        <span className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-yellow-500/20
                            text-yellow-400
                            text-sm
                            font-semibold
                        ">


                            <FaStar />

                            Featured Project


                        </span>





                        <h2 className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            mt-6
                            text-white
                        ">

                            {project.title}


                        </h2>





                        <p className="
                            text-slate-400
                            mt-6
                            leading-8
                        ">

                            {project.description}


                        </p>







                        {/* Technologies */}



                        <div className="
                            flex
                            flex-wrap
                            gap-3
                            mt-8
                        ">


                            {project.technologies?.map((tech) => (


                                <motion.span

                                    key={tech}

                                    whileHover={{
                                        scale: 1.08
                                    }}

                                    className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    text-blue-300
                                    text-sm
                                    hover:bg-blue-600
                                    hover:text-white
                                    transition-all
                                    "

                                >

                                    {tech}


                                </motion.span>



                            ))}



                        </div>







                        {/* Buttons */}



                        <div className="
                            flex
                            flex-wrap
                            gap-5
                            mt-10
                        ">




                            {/* Github */}



                            {project.github ? (


                                <a

                                    href={project.github}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-blue-600
                                    hover:bg-blue-700
                                    px-6
                                    py-3
                                    rounded-xl
                                    transition
                                    font-medium
                                    "

                                >

                                    <FaGithub />

                                    GitHub


                                </a>



                            ) : (


                                <button

                                    disabled

                                    className="
                                    px-6
                                    py-3
                                    rounded-xl
                                    border
                                    border-slate-700
                                    text-slate-500
                                    cursor-not-allowed
                                    "

                                >

                                    GitHub Coming Soon


                                </button>



                            )}








                            {/* Live Demo */}




                            {project.live ? (


                                <a

                                    href={project.live}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    border
                                    border-slate-700
                                    hover:border-blue-500
                                    hover:bg-slate-800
                                    px-6
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
                                    px-6
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



                </div>



            </GlassCard>


        </motion.div>


    );

};


export default FeaturedProject;