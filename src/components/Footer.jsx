import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {Heart, ExternalLink } from "lucide-react"

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/prana-w',
            color: 'hover:text-slate-800 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/in/prana-w',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/prana_w',
            color: 'hover:text-blue-400'
        }
    ];

    return (
        <footer className="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-t border-blue-200 dark:border-purple-800 text-slate-600 dark:text-slate-400 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                    {/* App Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">AI</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    AI-m
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-500">
                                    AIM integrates models
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                            A modern multi-model AI chat application for seamless conversations with various AI models.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/chat" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    Chat
                                </a>
                            </li>
                            <li>
                                <a href="/models" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                                    Models
                                </a>
                            </li>
                            <li>
                                <a href="/settings" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com/prana-w/AI-m"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                                >
                                    GitHub Repo
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a href="/docs" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="/api" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                                    API Reference
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Live Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                            Live Info
                        </h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span>System Online</span>
                            </div>
                            <div className="font-mono text-xs bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 px-2 py-1 rounded border border-blue-200 dark:border-blue-800">
                                {formatTime(time)}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-500">
                                UTC {time.toISOString().slice(0, 10)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-blue-200 dark:border-purple-800 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-sm">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                            <span>by</span>
                            <a
                                href="https://github.com/prana-w"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            >
                                prana-w
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg border text-slate-600 dark:text-slate-400 hover:border-blue-400 dark:hover:border-purple-500 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-md`}
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Version */}
                        <div className="text-xs text-slate-500 dark:text-slate-500">
                            v1.0.0 • React + Vite
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;