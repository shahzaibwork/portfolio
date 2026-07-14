import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from "react-icons/fa";

import GlassCard from "../GlassCard/GlassCard";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";


const Contact = () => {


    const form = useRef();


    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");



    const sendEmail = (e) => {

        e.preventDefault();


        setLoading(true);

        setStatus("");



        emailjs
            .sendForm(

                import.meta.env.VITE_EMAIL_SERVICE_ID,

                import.meta.env.VITE_EMAIL_TEMPLATE_ID,

                form.current,

                import.meta.env.VITE_EMAIL_PUBLIC_KEY

            )

            .then(() => {


                setStatus(
                    "Message sent successfully! I will get back to you soon."
                );


                form.current.reset();


            })


            .catch(() => {


                setStatus(
                    "Failed to send message. Please try again."
                );


            })


            .finally(() => {


                setLoading(false);


            });


    };





    return (

        <section
            id="contact"
            className="py-24 bg-slate-900"
        >


            <Container>


                <SectionTitle

                    subtitle="Contact"

                    title="Let's Work Together"

                />




                <div className="
                    grid
                    lg:grid-cols-2
                    gap-12
                    mt-16
                    items-center
                ">



                    {/* LEFT */}


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

                    >



                        <h3 className="
                            text-4xl
                            font-bold
                            text-white
                        ">

                            Have a project in mind?

                        </h3>



                        <p className="
                            text-slate-400
                            mt-6
                            leading-8
                        ">

                            I'm open to software engineering opportunities,
                            freelance projects, and collaborations involving
                            MERN Stack, Backend Development, and AI-powered applications.

                        </p>





                        <div className="
                            flex
                            flex-col
                            gap-5
                            mt-10
                        ">


                            <a
                                href="mailto:shahzaibarshad239@gmail.com"
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    text-slate-300
                                    hover:text-blue-400
                                "
                            >

                                <FaEnvelope className="text-blue-500" />

                                shahzaibarshad239@gmail.com


                            </a>




                            <a
                                href="https://github.com/shahzaibwork"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    text-slate-300
                                    hover:text-blue-400
                                "
                            >

                                <FaGithub className="text-blue-500" />

                                GitHub


                            </a>





                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    text-slate-300
                                    hover:text-blue-400
                                "
                            >

                                <FaLinkedin className="text-blue-500" />

                                LinkedIn


                            </a>



                        </div>


                    </motion.div>






                    {/* FORM */}



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

                    >



                        <GlassCard className="p-8">


                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-5"
                            >


                                <input

                                    type="text"

                                    name="name"

                                    placeholder="Your Name"

                                    required

                                    className="
                                        w-full
                                        bg-slate-800
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-3
                                        outline-none
                                        focus:border-blue-500
                                    "

                                />




                                <input

                                    type="email"

                                    name="email"

                                    placeholder="Your Email"

                                    required

                                    className="
                                        w-full
                                        bg-slate-800
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-3
                                        outline-none
                                        focus:border-blue-500
                                    "

                                />





                                <input

                                    type="text"

                                    name="subject"

                                    placeholder="Subject"

                                    required

                                    className="
                                        w-full
                                        bg-slate-800
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-3
                                        outline-none
                                        focus:border-blue-500
                                    "

                                />





                                <textarea

                                    name="message"

                                    rows="5"

                                    placeholder="Your Message"

                                    required

                                    className="
                                        w-full
                                        bg-slate-800
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-5
                                        py-3
                                        outline-none
                                        focus:border-blue-500
                                    "

                                />






                                <button

                                    disabled={loading}

                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        bg-blue-600
                                        hover:bg-blue-700
                                        py-3
                                        rounded-xl
                                        font-medium
                                        transition
                                    "

                                >


                                    <FaPaperPlane />


                                    {
                                        loading
                                            ?
                                            "Sending..."
                                            :
                                            "Send Message"
                                    }


                                </button>





                                {
                                    status && (

                                        <p className="
                                            text-center
                                            text-blue-400
                                            mt-4
                                        ">

                                            {status}

                                        </p>

                                    )
                                }




                            </form>



                        </GlassCard>



                    </motion.div>



                </div>


            </Container>


        </section>

    );

};


export default Contact;