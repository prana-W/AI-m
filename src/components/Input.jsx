import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react'; // redirect icon

function Input({ label, name, value, onChange, placeholder, linkTo }) {
    return (
        <div className="mb-4">
            {linkTo ? (
                <Link
                    to={linkTo}
                    className="flex items-center gap-1 text-blue-600 hover:underline mb-1 cursor-pointer w-fit"
                >
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium cursor-pointer"
                    >
                        {label}
                    </label>
                    <ArrowUpRight size={14} />
                </Link>
            ) : (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}

            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder || `Enter ${label}`}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default Input;
