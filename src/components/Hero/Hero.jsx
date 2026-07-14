import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.webp";

import Button from "../Button/Button";
import Background from "../Background/Background";
import FloatingIcons from "../FloatingIcons/FloatingIcons";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center overflow-hidden pt-16"
        >
            {/* Animated Background */}
            <Background />

            <div className="max-w-7xl mx-auto w-full px-6 py-8">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ================= LEFT ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-blue-400 font-semibold mb-3 text-lg">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            {profile.name}
                        </h1>

                        <h2 className="text-2xl lg:text-3xl text-slate-200 font-semibold mt-4">
                            {profile.title}
                        </h2>

                        <div className="text-blue-400 text-xl font-medium mt-5 h-10">
                            <TypeAnimation
                                sequence={[
                                    "Software Engineer",
                                    1800,
                                    "Full Stack Developer",
                                    1800,
                                    "Backend Developer",
                                    1800,
                                    "AI Enthusiast",
                                    1800,
                                    "Problem Solver",
                                    1800,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-slate-400 mt-6 max-w-xl leading-8 text-lg">
                            {profile.description}
                        </p>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-4 mt-8">

                            <Button href="#projects">
                                View Projects
                            </Button>

                            <Button
                                href={profile.resume}
                                download
                                primary={false}
                            >
                                Download Resume
                            </Button>

                        </div>

                        {/* Social Icons */}

                        <div className="flex gap-6 text-3xl mt-8">

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 hover:scale-125 transition duration-300"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 hover:scale-125 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href={`mailto:${profile.email}`}
                                className="text-slate-400 hover:text-blue-400 hover:scale-125 transition duration-300"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </motion.div>

                    {/* ================= RIGHT ================= */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -10, 0],
                        }}
                        transition={{
                            opacity: { duration: 0.8 },
                            scale: { duration: 0.8 },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[380px] h-[380px] flex items-center justify-center">

                            {/* Floating Technology Icons */}
                            <FloatingIcons />

                            {/* Glow */}
                            <div className="absolute inset-10 rounded-full bg-blue-500/30 blur-3xl animate-pulse -z-10"></div>

                            {/* Ring */}
                            <div className="absolute w-[310px] h-[310px] rounded-full border border-blue-500/40"></div>

                            {/* Profile Image */}
                            <img
                                src={profileImage}
                                alt={`${profile.name} - Software Engineer`}
                                loading="eager"
                                fetchPriority="high"
                                className="relative z-30 w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.45)]"
                            />

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;