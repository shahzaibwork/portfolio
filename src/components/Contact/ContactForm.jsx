import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import GlassCard from "../GlassCard/GlassCard";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <GlassCard className="p-8">

            <h3 className="text-3xl font-bold mb-8">
                Send a Message
            </h3>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500 transition"
                />

                <textarea
                    rows={6}
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none resize-none focus:border-blue-500 transition"
                />

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition disabled:opacity-60"
                >
                    <FaPaperPlane />

                    {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                    <p className="text-green-400 font-medium">
                        ✅ Message sent successfully.
                    </p>
                )}

                {status === "error" && (
                    <p className="text-red-400 font-medium">
                        ❌ Failed to send message. Please try again.
                    </p>
                )}

            </form>

        </GlassCard>
    );
};

export default ContactForm;