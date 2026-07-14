import { motion } from "framer-motion";

import {
    FaAward,
    FaCalendarAlt,
    FaExternalLinkAlt,
    FaFilePdf,
} from "react-icons/fa";

import GlassCard from "../GlassCard/GlassCard";


const CertificateCard = ({ certificate }) => {


    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 40,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            viewport={{
                once: true,
            }}

            transition={{
                duration: 0.7,
            }}

        >


            <GlassCard

                className="
                    overflow-hidden
                    p-5
                    sm:p-8
                "

            >


                <div className="
                    grid
                    lg:grid-cols-2
                    gap-8
                    lg:gap-12
                    items-center
                ">


                    {/* ================= LEFT IMAGE ================= */}


                    <div className="
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

                                <span className="
                                    w-3
                                    h-3
                                    rounded-full
                                    bg-red-500
                                " />

                                <span className="
                                    w-3
                                    h-3
                                    rounded-full
                                    bg-yellow-500
                                " />

                                <span className="
                                    w-3
                                    h-3
                                    rounded-full
                                    bg-green-500
                                " />

                            </div>


                            <span className="
                                text-xs
                                text-slate-400
                                truncate
                                max-w-[150px]
                            ">

                                {certificate.organization}

                            </span>


                            <span className="
                                text-blue-400
                                text-xs
                                font-semibold
                            ">

                                CERT

                            </span>


                        </div>



                        {/* Certificate Image */}


                        <div className="
                            relative
                            overflow-hidden
                        ">


                            <img

                                src={certificate.image}

                                alt={`${certificate.title} certificate`}

                                loading="lazy"

                                decoding="async"

                                className="
                                    w-full
                                    object-cover
                                    group-hover:scale-105
                                    transition
                                    duration-500
                                "

                            />


                            <div

                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-slate-950/60
                                    to-transparent
                                    opacity-0
                                    group-hover:opacity-100
                                    transition
                                    duration-500
                                "

                            />


                        </div>


                    </div>





                    {/* ================= RIGHT CONTENT ================= */}



                    <div>



                        {/* Badge */}


                        <span className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-blue-500/20
                            text-blue-400
                            font-medium
                            text-sm
                        ">


                            <FaAward />


                            Professional Certificate


                        </span>





                        {/* Title */}


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            mt-6
                            text-white
                        ">


                            {certificate.title}


                        </h2>





                        {/* Organization */}


                        <p className="
                            text-blue-400
                            text-lg
                            sm:text-xl
                            mt-3
                        ">


                            {certificate.organization}


                        </p>





                        {/* Date */}


                        <div className="
                            flex
                            items-center
                            gap-3
                            mt-6
                            text-slate-400
                        ">


                            <FaCalendarAlt />


                            <span>

                                Issued {certificate.issued}

                            </span>


                        </div>







                        {/* Skills */}


                        <div className="mt-10">


                            <h3 className="
                                text-xl
                                font-semibold
                                mb-5
                                text-white
                            ">

                                Skills Covered

                            </h3>



                            <div className="
                                flex
                                flex-wrap
                                gap-3
                            ">



                                {certificate.skills.map((skill) => (


                                    <span

                                        key={skill}

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
                                            hover:border-blue-500
                                            transition-all
                                        "

                                    >


                                        {skill}


                                    </span>


                                ))}



                            </div>


                        </div>








                        {/* Buttons */}



                        <div className="
                            flex
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-4
                            mt-10
                        ">



                            <a

                                href={certificate.pdf}

                                target="_blank"

                                rel="noopener noreferrer"

                                aria-label={`View ${certificate.title} certificate PDF`}

                                className="
                                    flex
                                    items-center
                                    justify-center
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


                                <FaFilePdf />


                                View Certificate


                            </a>







                            <a

                                href={certificate.credentialUrl}

                                target="_blank"

                                rel="noopener noreferrer"

                                aria-label={`Verify ${certificate.title} credential`}

                                className="
                                    flex
                                    items-center
                                    justify-center
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


                                Verify Credential


                            </a>



                        </div>



                    </div>



                </div>



            </GlassCard>



        </motion.div>

    );

};


export default CertificateCard;