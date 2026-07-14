import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import about from "../../data/about";
import profileImage from "../../assets/images/profile.webp";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../GlassCard/GlassCard";


const About = () => {

    return (

        <section
            id="about"
            className="py-20 sm:py-24 bg-slate-900"
        >

            <Container>


                {/* Section Title */}

                <SectionTitle
                    title="About Me"
                />



                {/* Main Content */}


                <div className="
                    grid 
                    lg:grid-cols-2 
                    gap-12 
                    lg:gap-20 
                    items-center
                    mt-12
                ">



                    {/* Profile Image */}


                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -50
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: 0.7
                        }}

                        className="flex justify-center"

                    >

                        <div className="relative group">


                            {/* Glow */}

                            <div className="
                                absolute 
                                inset-0
                                bg-blue-500/20
                                blur-3xl
                                rounded-full
                                group-hover:bg-blue-500/30
                                transition
                            "/>



                            <img

                                src={profileImage}

                                alt="Shahzaib Arshad Software Engineer"

                                loading="lazy"

                                className="
                                relative
                                w-64
                                sm:w-72
                                lg:w-80
                                rounded-3xl
                                object-cover
                                shadow-2xl
                                border
                                border-slate-700
                                group-hover:scale-105
                                transition
                                duration-500
                                "

                            />


                        </div>


                    </motion.div>







                    {/* Content */}


                    <motion.div

                        initial={{
                            opacity: 0,
                            x: 50
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: 0.7
                        }}

                    >



                        <h3 className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            text-white
                        ">

                            {about.title}

                        </h3>




                        <p className="
                            text-slate-400
                            mt-6
                            leading-8
                            text-base
                            sm:text-lg
                            whitespace-pre-line
                        ">

                            {about.description}

                        </p>






                        {/* Highlights */}


                        <div className="
                            grid
                            sm:grid-cols-2
                            gap-4
                            mt-8
                        ">


                            {about.highlights.map((item) => (


                                <GlassCard

                                    key={item}

                                    className="p-4"

                                >

                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">


                                        <FaCheckCircle
                                            className="
                                            text-blue-500
                                            text-lg
                                            flex-shrink-0
                                            "
                                        />


                                        <span className="text-slate-200">

                                            {item}

                                        </span>


                                    </div>


                                </GlassCard>


                            ))}


                        </div>



                    </motion.div>



                </div>







                {/* Stats */}


                <div className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    mt-16
                    lg:mt-24
                ">


                    {about.stats.map((stat) => (


                        <GlassCard

                            key={stat.label}

                            className="
                            p-6
                            sm:p-8
                            text-center
                            hover:-translate-y-2
                            transition
                            duration-300
                            "

                        >


                            <h3 className="
                                text-4xl
                                sm:text-5xl
                                font-bold
                                text-blue-400
                            ">

                                {stat.number}

                            </h3>



                            <p className="
                                text-slate-400
                                mt-3
                            ">

                                {stat.label}

                            </p>



                        </GlassCard>


                    ))}


                </div>



            </Container>


        </section>

    );

};


export default About;