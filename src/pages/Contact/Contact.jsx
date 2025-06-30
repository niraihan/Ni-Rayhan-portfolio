import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                "service_zvh3osc",        // ✅ Replace this
                "template_jmzv2l6",       // ✅ Replace this
                form.current,
                "8t_3FMhxJ1cNpxuHq"         // ✅ Replace this
            );
            toast.success("✅ Message sent successfully!");
            e.target.reset();
        } catch (error) {
            toast.error("❌ Failed to send message. Try again!");
            console.error("Email Error:", error);
        }
    };

    return (
        <section className="py-20 px-6 bg-base-100 text-base-content">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary mb-10">Contact Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <a href="mailto:raihan14un@gmail.com" className="text-sm">
                                    raihan14un@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <a href="tel:+8801234567890" className="text-sm">
                                    +880 1234 567 890
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">WhatsApp</p>
                                <a
                                    href="https://wa.me/8801234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
