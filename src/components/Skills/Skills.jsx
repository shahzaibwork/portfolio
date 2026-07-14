import { motion } from "framer-motion";

import skills from "../../data/skills";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../GlassCard/GlassCard";


const Skills = () => {

    return (

        <section
            id="skills"
            className="py-20 sm:py-24 bg-slate-950"
        >

            <Container>


                <SectionTitle

                    subtitle="Skills"

                    title="Technical Expertise"

                />



                <div className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    lg:gap-8
                    mt-12
                ">


                    {skills.map((category, index) => (


                        <motion.div

                            key={category.title}


                            initial={{
                                opacity: 0,
                                y: 40
                            }}


                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}


                            viewport={{
                                once: true
                            }}


                            transition={{

                                duration: 0.5,

                                delay: index * 0.1

                            }}


                            whileHover={{
                                y: -8
                            }}

                        >



                            <GlassCard

                                className="
                                p-6
                                h-full
                                hover:border-blue-500
                                transition-all
                                duration-300
                                "

                            >




                                {/* Category Title */}


                                <h3 className="
                                    text-2xl
                                    font-bold
                                    mb-6
                                    bg-gradient-to-r
                                    from-blue-400
                                    to-cyan-400
                                    bg-clip-text
                                    text-transparent
                                ">

                                    {category.title}


                                </h3>






                                {/* Skills */}


                                <div className="
                                    flex
                                    flex-wrap
                                    gap-3
                                ">


                                    {category.skills.map((skill) => (



                                        <motion.span


                                            key={skill}


                                            whileHover={{
                                                scale: 1.08
                                            }}


                                            className="
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-slate-800/80
                                            border
                                            border-slate-700
                                            text-slate-300
                                            text-sm
                                            cursor-default
                                            hover:bg-blue-600
                                            hover:text-white
                                            hover:border-blue-400
                                            transition-all
                                            duration-300
                                            "

                                        >

                                            {skill}


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


export default Skills;