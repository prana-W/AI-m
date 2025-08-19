import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PromptInput = ({ onSend }) => {
    const [prompt, setPrompt] = useState('');

    const handleSend = () => {
        if (prompt.trim() === '') return;
        onSend(prompt);
        setPrompt('');
    };

    return (
        <div className="flex items-center w-full max-w-2xl mx-auto p-2 border rounded-2xl shadow-sm bg-white dark:bg-gray-900">
            <input
                type="text"
                placeholder="Type your prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-2 text-sm bg-transparent outline-none dark:text-white"
            />
            <button
                onClick={handleSend}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
                <Send size={20} className="text-blue-500" />
            </button>
        </div>
    );
};

export default PromptInput;
