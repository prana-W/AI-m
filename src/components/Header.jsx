import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkClasses =
        'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200';
    const activeClasses = 'bg-blue-500 text-white';
    const inactiveClasses =
        'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700';

    return (
        <header className="w-full bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

                <Link
                    to="/"
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                >
                    ai-M
                </Link>


                <nav className="flex space-x-4">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${navLinkClasses} ${
                                isActive ? activeClasses : inactiveClasses
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/api-keys"
                        className={({ isActive }) =>
                            `${navLinkClasses} ${
                                isActive ? activeClasses : inactiveClasses
                            }`
                        }
                    >
                        Add API Key
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${navLinkClasses} ${
                                isActive ? activeClasses : inactiveClasses
                            }`
                        }
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
