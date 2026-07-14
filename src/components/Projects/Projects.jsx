import { motion } from "framer-motion";

import projects from "../../data/projects";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";


const Projects = () => {

    const featured = projects.find(
        (project) => project.featured
    );

    const others = projects.filter(
        (project) => !project.featured
    );


    return (

        <section

            id="projects"

            className="
            py-20
            sm:py-24
            bg-slate-950
            "

        >

            <Container>



                <SectionTitle

                    subtitle="Portfolio"

                    title="Featured Projects"

                />





                {/* Featured Project */}


                {featured && (

                    <motion.div

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
                            duration: 0.7
                        }}


                        className="
                        mt-12
                        sm:mt-16
                        "

                    >

                        <FeaturedProject

                            project={featured}

                        />


                    </motion.div>


                )}








                {/* More Projects Divider */}


                {others.length > 0 && (

                    <div className="
                        flex
                        items-center
                        gap-4
                        sm:gap-6
                        my-16
                        sm:my-20
                    ">


                        <div className="
                            flex-1
                            h-px
                            bg-slate-800
                        " />



                        <h3 className="
                            text-xl
                            sm:text-3xl
                            font-bold
                            text-white
                            whitespace-nowrap
                        ">

                            More Projects


                        </h3>




                        <div className="
                            flex-1
                            h-px
                            bg-slate-800
                        " />


                    </div>


                )}









                {/* Project Cards */}


                <div className="
                    grid
                    sm:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    lg:gap-8
                ">


                    {others.map((project, index) => (


                        <motion.div


                            key={project.title}



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



                            <ProjectCard

                                project={project}

                                index={index + 2}

                            />



                        </motion.div>



                    ))}



                </div>







            </Container>


        </section>


    );

};


export default Projects;