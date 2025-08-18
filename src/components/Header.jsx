import React, { useState, useEffect } from 'react';
import {
    Sun,
    Moon,
    Menu,
    X,
    Bot,
    Sparkles,
    Settings,
    Key,
    Home,
    Info
} from 'lucide-react';

const Header = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return true;
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState('/');

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { to: '/', label: 'Home', icon: Home },
        { to: '/chat', label: 'Chat', icon: Bot },
        { to: '/api-keys', label: 'API Keys', icon: Key },
        { to: '/settings', label: 'Settings', icon: Settings },
        { to: '/about', label: 'About', icon: Info }
    ];

    const navLinkClasses = 'flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer';
    const activeClasses = 'text-blue-600 dark:text-blue-400';
    const inactiveClasses = 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400';

    const handleNavClick = (route) => {
        setActiveRoute(route);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-blue-200 dark:border-purple-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div
                        onClick={() => handleNavClick('/')}
                        className="flex items-center space-x-2 group cursor-pointer"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                AI-m
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                                AIM integrates models
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activeRoute === item.to;
                            return (
                                <div
                                    key={item.to}
                                    onClick={() => handleNavClick(item.to)}
                                    className={`${navLinkClasses} ${
                                        isActive ? activeClasses : inactiveClasses
                                    }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Side Controls */}
                    <div className="flex items-center space-x-2">

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? 'max-h-96 opacity-100 pb-4'
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="pt-2 space-y-1">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activeRoute === item.to;
                            return (
                                <div
                                    key={item.to}
                                    onClick={() => handleNavClick(item.to)}
                                    className={`${navLinkClasses} w-full justify-start ${
                                        isActive ? activeClasses : inactiveClasses
                                    }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </div>
                            );
                        })}

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center space-x-2 w-full px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            {isDark ? (
                                <>
                                    <Sun className="w-4 h-4" />
                                    <span>Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="w-4 h-4" />
                                    <span>Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;