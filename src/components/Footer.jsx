import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
            second: '2-digit',
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/prana-w',
            color: 'hover:text-foreground',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/pranaw-kumar-710331215/',
            color: 'hover:text-blue-600',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://twitter.com/prana_w_',
            color: 'hover:text-blue-400',
        },
    ];

    const quickLinks = [
        { href: '/models', label: 'Models' },
        { href: '/api-keys', label: 'API Key' },
    ];

    const resourceLinks = [
        {
            href: 'https://github.com/prana-w/AI-m',
            label: 'GitHub Repo',
            external: true,
        },
        { href: '/about', label: 'About Us' },
    ];

    return (
        <footer className="w-full border-t bg-background/80 backdrop-blur-sm text-muted-foreground py-8 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    AI
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    AI-m
                                </h3>
                                <p className="text-xs text-muted-foreground -mt-1">
                                    AIM integrates models
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            A modern multi-model AI chat application for
                            seamless conversations with various AI models.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Quick Links
                        </h4>
                        <nav className="space-y-2">
                            {quickLinks.map((link) => (
                                <div key={link.href}>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                                        asChild
                                    >
                                        <a href={link.href}>{link.label}</a>
                                    </Button>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Resources
                        </h4>
                        <nav className="space-y-2">
                            {resourceLinks.map((link) => (
                                <div key={link.href}>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400"
                                        asChild
                                    >
                                        <a
                                            href={link.href}
                                            {...(link.external && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            })}
                                            className="inline-flex items-center gap-1"
                                        >
                                            {link.label}
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Live Info
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm">System Online</span>
                            </div>

                            <Badge
                                variant="outline"
                                className="font-mono text-xs"
                            >
                                {formatTime(time)}
                            </Badge>

                            <div className="text-xs text-muted-foreground">
                                UTC {time.toISOString().slice(0, 10)}
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-sm">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                        <span>by</span>
                        <Button
                            variant="link"
                            className="h-auto p-0 font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400"
                            asChild
                        >
                            <a
                                href="https://github.com/prana-w"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                prana-w
                            </a>
                        </Button>
                    </div>

                    <div className="flex items-center space-x-2">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <Button
                                    key={social.name}
                                    variant="outline"
                                    size="sm"
                                    className={`text-muted-foreground ${social.color} transition-colors`}
                                    asChild
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                </Button>
                            );
                        })}
                    </div>

                    <Badge variant="secondary" className="text-xs">
                        ai-m Higher.
                    </Badge>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
