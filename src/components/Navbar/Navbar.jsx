import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaBars,
    FaTimes,
} from "react-icons/fa";

import profile from "../../data/profile";


const Navbar = () => {


    const [open, setOpen] = useState(false);



    const links = [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Skills",
            href: "#skills"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Certifications",
            href: "#certifications"
        },
        {
            name: "Contact",
            href: "#contact"
        },
    ];




    return (

        <nav
            className="
            fixed
            top-0
            left-0
            w-full
            backdrop-blur-md
            bg-slate-900/70
            border-b
            border-slate-800
            z-50
            "
        >


            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-4
                flex
                items-center
                justify-between
            ">


                {/* Logo */}


                <a
                    href="#home"
                    className="
                    text-2xl
                    font-bold
                    text-white
                    "
                >

                    Shahzaib

                    <span className="text-blue-500">
                        .
                    </span>


                </a>





                {/* Desktop Menu */}


                <ul
                    className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                    text-slate-300
                    "
                >


                    {
                        links.map((link) => (

                            <li key={link.name}>

                                <a
                                    href={link.href}
                                    className="
                                    hover:text-blue-400
                                    transition
                                    "
                                >

                                    {link.name}

                                </a>


                            </li>

                        ))
                    }


                </ul>






                {/* Desktop Resume */}


                <a
                    href={profile.resume}
                    download
                    className="
                    hidden
                    md:block
                    bg-blue-600
                    hover:bg-blue-700
                    px-5
                    py-2
                    rounded-lg
                    transition
                    "
                >

                    Resume


                </a>






                {/* Mobile Button */}


                <button

                    onClick={() => setOpen(!open)}

                    className="
                    md:hidden
                    text-2xl
                    text-white
                    "

                >

                    {
                        open
                            ?
                            <FaTimes />
                            :
                            <FaBars />
                    }


                </button>



            </div>








            {/* Mobile Menu */}



            <AnimatePresence>


                {
                    open && (

                        <motion.div

                            initial={{
                                opacity: 0,
                                height: 0
                            }}

                            animate={{
                                opacity: 1,
                                height: "auto"
                            }}

                            exit={{
                                opacity: 0,
                                height: 0
                            }}

                            className="
                        md:hidden
                        overflow-hidden
                        bg-slate-900
                        border-t
                        border-slate-800
                        "

                        >



                            <ul className="
                            flex
                            flex-col
                            gap-6
                            px-6
                            py-8
                            text-slate-300
                        ">



                                {
                                    links.map((link) => (


                                        <li key={link.name}>


                                            <a

                                                href={link.href}

                                                onClick={() => setOpen(false)}

                                                className="
                                            hover:text-blue-400
                                            transition
                                            "

                                            >

                                                {link.name}


                                            </a>


                                        </li>


                                    ))
                                }



                                <a

                                    href={profile.resume}

                                    download

                                    className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-center
                                px-5
                                py-3
                                rounded-lg
                                "

                                >

                                    Download Resume


                                </a>



                            </ul>



                        </motion.div>

                    )
                }


            </AnimatePresence>



        </nav>


    );

};


export default Navbar;