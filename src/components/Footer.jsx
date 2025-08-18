import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-8 shadow-inner">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                {/* App Name */}
                <div className="text-lg font-semibold">
                    AI-m <span className="text-sm text-gray-500">(AIM integrates models)</span>
                </div>

                {/* Current Time */}
                <div className="text-sm">
                    {time.toLocaleTimeString()}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 text-xl">
                    <a
                        href="https://github.com/prana-w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/prana-w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/prana_w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* GitHub Repo */}
                <div className="text-sm">
                    <a
                        href="https://github.com/prana-w/AI-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500"
                    >
                        GitHub Repo
                    </a>
                </div>

                {/* Signature */}
                <div className="text-sm">
                    Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">prana-w</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;