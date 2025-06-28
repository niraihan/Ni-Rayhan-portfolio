import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-20 px-6 bg-base-100 text-base-content">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary mb-10">Contact Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="text-left space-y-6">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <a href="mailto:nazrul@example.com" className="text-sm">
                                    nazrul@example.com
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
                                <a href="https://wa.me/8801234567890" className="text-sm" target="_blank" rel="noreferrer">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Optional Placeholder) */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                        <textarea
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
