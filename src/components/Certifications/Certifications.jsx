import { motion } from "framer-motion";

import certificates from "../../data/certificates";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

import CertificateCard from "./CertificateCard";


const Certifications = () => {

    return (

        <section
            id="certifications"
            className="py-24 bg-slate-950"
        >

            <Container>


                {/* Section Heading */}

                <SectionTitle

                    subtitle="Achievements"

                    title="Certifications"

                />



                {/* Certificates */}

                <div className="mt-16 space-y-10">


                    {certificates.length > 0 ? (


                        certificates.map((certificate, index) => (


                            <motion.div

                                key={certificate.id}

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
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}

                            >


                                <CertificateCard

                                    certificate={certificate}

                                />


                            </motion.div>


                        ))


                    ) : (


                        <p className="text-center text-slate-400">

                            No certifications added yet.

                        </p>


                    )}


                </div>


            </Container>


        </section>

    );

};


export default Certifications;