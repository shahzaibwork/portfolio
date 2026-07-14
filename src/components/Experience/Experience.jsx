import { motion } from "framer-motion";

import experience from "../../data/experience";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../GlassCard/GlassCard";


const Experience = () => {

    return (

        <section
            id="experience"
            className="py-20 sm:py-24 bg-slate-900"
        >

            <Container>


                <SectionTitle

                    subtitle="Experience"

                    title="Professional Journey"

                />




                <div className="
                    relative
                    mt-12
                    sm:mt-16
                ">



                    {/* Timeline Line */}

                    <div
                        className="
                        absolute
                        left-3
                        sm:left-4
                        top-0
                        h-full
                        w-1
                        bg-gradient-to-b
                        from-blue-500
                        via-cyan-400
                        to-blue-600
                        rounded-full
                        "
                    />






                    {experience.map((item, index) => (


                        <motion.div

                            key={item.company}


                            initial={{
                                opacity: 0,
                                x: -40
                            }}


                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}


                            viewport={{
                                once: true
                            }}


                            transition={{

                                duration: 0.6,

                                delay: index * 0.15

                            }}



                            className="
                            relative
                            pl-10
                            sm:pl-16
                            pb-12
                            sm:pb-14
                            "

                        >





                            {/* Timeline Dot */}


                            <motion.div

                                whileHover={{
                                    scale: 1.2
                                }}

                                className="
                                absolute
                                left-0
                                top-5
                                w-7
                                h-7
                                sm:w-8
                                sm:h-8
                                rounded-full
                                bg-blue-500
                                border-4
                                border-slate-900
                                shadow-lg
                                shadow-blue-500/40
                                "

                            />









                            {/* Experience Card */}


                            <GlassCard

                                className="
                                p-5
                                sm:p-8
                                hover:border-blue-500
                                transition-all
                                duration-300
                                "

                            >





                                <div className="
                                    flex
                                    flex-col
                                    md:flex-row
                                    md:items-center
                                    md:justify-between
                                    gap-4
                                ">




                                    <div>


                                        <h3 className="
                                            text-xl
                                            sm:text-2xl
                                            font-bold
                                            text-white
                                        ">

                                            {item.role}

                                        </h3>




                                        <h4 className="
                                            text-blue-400
                                            text-base
                                            sm:text-lg
                                            mt-1
                                        ">

                                            {item.company}

                                        </h4>



                                    </div>







                                    <span

                                        className="
                                        inline-flex
                                        w-fit
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-blue-500/10
                                        border
                                        border-blue-500/30
                                        text-blue-300
                                        text-sm
                                        font-medium
                                        "

                                    >

                                        {item.duration}


                                    </span>





                                </div>








                                {/* Description */}


                                <p className="
                                    mt-6
                                    leading-7
                                    sm:leading-8
                                    text-slate-400
                                ">

                                    {item.description}

                                </p>







                                {/* Technologies */}


                                <div className="
                                    flex
                                    flex-wrap
                                    gap-3
                                    mt-8
                                ">


                                    {item.technologies.map((tech) => (


                                        <motion.span


                                            key={tech}


                                            whileHover={{
                                                scale: 1.08
                                            }}


                                            className="
                                            px-3
                                            sm:px-4
                                            py-2
                                            rounded-full
                                            bg-slate-800
                                            border
                                            border-slate-700
                                            text-xs
                                            sm:text-sm
                                            text-slate-300
                                            hover:bg-blue-600
                                            hover:border-blue-500
                                            hover:text-white
                                            transition-all
                                            duration-300
                                            cursor-default
                                            "

                                        >

                                            {tech}


                                        </motion.span>



                                    ))}



                                </div>





                            </GlassCard>





                        </motion.div>



                    ))}



                </div>





            </Container>


        </section>

    );

};


export default Experience;