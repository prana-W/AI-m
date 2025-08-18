import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-6">
            <h1 className="text-7xl font-extrabold text-blue-500 mb-4">404</h1>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Oops! Page Not Found.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600
                   text-white font-medium transition-all duration-300 shadow-lg"
            >
                ⬅ Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
