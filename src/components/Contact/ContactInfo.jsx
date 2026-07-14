import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaFileDownload,
} from "react-icons/fa";

import contact from "../../data/contact";
import profile from "../../data/profile";

import GlassCard from "../GlassCard/GlassCard";

const ContactInfo = () => {
    return (
        <GlassCard className="p-8 h-full">

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >

                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 font-medium mb-6">
                    Available for Opportunities
                </span>

                <h3 className="text-4xl font-bold leading-tight">
                    Let's build something
                    <br />
                    amazing together.
                </h3>

                <p className="text-slate-400 leading-8 mt-6">
                    I'm currently open to internships, graduate software
                    engineering roles, freelance work, and exciting full-stack
                    development opportunities. If you have a project or a role
                    that matches my skills, feel free to reach out.
                </p>

                {/* Contact Details */}

                <div className="space-y-5 mt-10">

                    <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                    >
                        <FaEnvelope className="text-blue-400 text-xl" />

                        <div>
                            <p className="text-sm text-slate-400">Email</p>
                            <p>{contact.email}</p>
                        </div>
                    </a>

                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                    >
                        <FaLinkedin className="text-blue-400 text-xl" />

                        <div>
                            <p className="text-sm text-slate-400">LinkedIn</p>
                            <p>Connect with me</p>
                        </div>
                    </a>

                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                    >
                        <FaGithub className="text-blue-400 text-xl" />

                        <div>
                            <p className="text-sm text-slate-400">GitHub</p>
                            <p>View my repositories</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800">

                        <FaMapMarkerAlt className="text-blue-400 text-xl" />

                        <div>
                            <p className="text-sm text-slate-400">Location</p>
                            <p>{contact.location}</p>
                        </div>

                    </div>

                </div>

                {/* Resume */}

                <a
                    href={profile.resume}
                    download
                    className="mt-10 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl transition font-medium"
                >
                    <FaFileDownload />

                    Download Resume
                </a>

            </motion.div>

        </GlassCard>
    );
};

export default ContactInfo;