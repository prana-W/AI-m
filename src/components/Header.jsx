import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, Bot, Sparkles, Key, Home, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
        }
        return true;
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const navItems = [
        { to: '/', label: 'Home', icon: Home },
        { to: '/api-keys', label: 'API Key', icon: Key },
        { to: '/models', label: 'AI Models', icon: Bot },
        { to: '/about', label: 'About', icon: Info },
    ];

    const handleNavClick = (route) => {
        navigate(route);
        setIsMobileMenuOpen(false);
    };

    const NavLink = ({ item, isActive, onClick }) => {
        const IconComponent = item.icon;
        return (
            <NavigationMenuLink
                onClick={onClick}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                    isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
            </NavigationMenuLink>
        );
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        onClick={() => handleNavClick('/')}
                        className="flex items-center space-x-3 cursor-pointer group"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                AI-m
                            </h1>
                            <p className="text-xs text-muted-foreground -mt-1">
                                AIM integrates models
                            </p>
                        </div>
                    </div>

                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="space-x-1">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.to}>
                                    <NavLink
                                        item={item}
                                        isActive={location.pathname === item.to}
                                        onClick={() => handleNavClick(item.to)}
                                    />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </Button>

                        <Sheet
                            open={isMobileMenuOpen}
                            onOpenChange={setIsMobileMenuOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="md:hidden text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80">
                                <div className="flex flex-col space-y-4 mt-6">
                                    <div className="flex items-center space-x-3 pb-4 border-b">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-foreground">
                                                AI-m
                                            </h2>
                                            <p className="text-xs text-muted-foreground">
                                                AIM integrates models
                                            </p>
                                        </div>
                                    </div>

                                    <nav className="space-y-2">
                                        {navItems.map((item) => {
                                            const IconComponent = item.icon;
                                            const isActive =
                                                location.pathname === item.to;
                                            return (
                                                <Button
                                                    key={item.to}
                                                    variant={
                                                        isActive
                                                            ? 'secondary'
                                                            : 'ghost'
                                                    }
                                                    className={`w-full justify-start space-x-2 ${
                                                        isActive
                                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                                                            : 'text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400'
                                                    }`}
                                                    onClick={() =>
                                                        handleNavClick(item.to)
                                                    }
                                                >
                                                    <IconComponent className="w-4 h-4" />
                                                    <span>{item.label}</span>
                                                </Button>
                                            );
                                        })}
                                    </nav>

                                    <div className="pt-4 border-t">
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start space-x-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                                            onClick={() => {
                                                toggleTheme();
                                                setIsMobileMenuOpen(false);
                                            }}
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
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
