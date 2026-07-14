import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp
} from "react-icons/fa";

import profile from "../../data/profile";


const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (

        <footer className="bg-slate-950 border-t border-slate-800">

            <div className="max-w-7xl mx-auto px-6 py-12">


                <div className="flex flex-col md:flex-row items-center justify-between gap-8">


                    {/* Logo */}

                    <div>

                        <h2 className="text-3xl font-bold text-white">
                            Shahzaib
                            <span className="text-blue-500">
                                .
                            </span>
                        </h2>


                        <p className="text-slate-400 mt-3">
                            Software Engineer | MERN Stack Developer | AI Enthusiast
                        </p>

                    </div>



                    {/* Navigation */}

                    <div className="flex flex-wrap justify-center gap-6 text-slate-400">


                        <a
                            href="#home"
                            className="hover:text-blue-400 transition"
                        >
                            Home
                        </a>


                        <a
                            href="#about"
                            className="hover:text-blue-400 transition"
                        >
                            About
                        </a>


                        <a
                            href="#projects"
                            className="hover:text-blue-400 transition"
                        >
                            Projects
                        </a>


                        <a
                            href="#contact"
                            className="hover:text-blue-400 transition"
                        >
                            Contact
                        </a>


                    </div>



                    {/* Social Links */}

                    <div className="flex gap-5 text-2xl">


                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition"
                        >
                            <FaGithub />
                        </a>



                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition"
                        >
                            <FaLinkedin />
                        </a>



                        <a
                            href={`mailto:${profile.email}`}
                            className="text-slate-400 hover:text-blue-400 transition"
                        >
                            <FaEnvelope />
                        </a>


                    </div>



                </div>



                {/* Bottom */}


                <div className="
                    mt-10
                    pt-6
                    border-t
                    border-slate-800
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-5
                ">


                    <p className="text-slate-500 text-sm">

                        © {new Date().getFullYear()} Shahzaib Arshad.
                        All rights reserved.

                    </p>



                    {/* Back To Top Button */}


                    <button
                        onClick={scrollTop}
                        className="
                            flex
                            items-center
                            gap-2
                            px-5
                            py-3
                            rounded-xl
                            bg-blue-600
                            hover:bg-blue-700
                            transition
                            text-white
                        "
                    >

                        <FaArrowUp />

                        Top

                    </button>


                </div>


            </div>


        </footer>

    );
};


export default Footer;