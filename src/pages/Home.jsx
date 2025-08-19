import { ResponseBox, PromptArea } from '../components';
import { useState } from 'react';

export default function Home() {
    const [prompt, setPrompt] = useState('');

    const handlePrompt = (newPrompt) => {
        setPrompt(newPrompt);
    };

    // 0 index in ResponseBox renders no model
    return (
        <div className="flex flex-col flex-1">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4">
                <ResponseBox prompt={prompt} index={0} />
                <ResponseBox prompt={prompt} index={1} />
                <ResponseBox prompt={prompt} index={0} />
            </div>
            <div className="border-t bg-background p-2 md:p-4 flex-shrink-0">
                <PromptArea onSend={handlePrompt} />
            </div>
        </div>
    );
}
