import { ResponseBox, PromptArea } from '../components';
import { useState } from 'react';

export default function Home() {
    const [prompt, setPrompt] = useState('');

    const handlePrompt = (newPrompt) => {
        setPrompt(newPrompt);
    };

    return (
        <div className="h-full flex flex-col">
            {/* Main content area with three response boxes */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 overflow-hidden">
                <div className="flex flex-col h-full">
                    <ResponseBox prompt={prompt} index={0} />
                </div>
                <div className="flex flex-col h-full">
                    <ResponseBox prompt={prompt} index={1} />
                </div>
                <div className="flex flex-col h-full">
                    <ResponseBox prompt={prompt} index={2} />
                </div>
            </div>

            {/* Fixed bottom area for prompt */}
            <div className="border-t bg-background p-2 md:p-4 flex-shrink-0">
                <PromptArea onSend={handlePrompt} />
            </div>
        </div>
    );
}
