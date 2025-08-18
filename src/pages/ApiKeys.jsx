import Input from '../components/Input.jsx';
import { useState } from 'react';

export default function ApiKeys() {
    const [geminiApiKey, setGeminiApiKey] = useState('');
    const [openRouterApiKey, setOpenRouterApiKey] = useState('');

    return (
        <>
            <Input
                label="Gemini API Key"
                name="gemini_api_key"
                value={geminiApiKey}
                onChange={(e) => setGeminiApiKey(e.target)}
                placeholder="Paste Gemini API Key"
                linkTo="https://aistudio.google.com/apikey"
            />

            <Input
                label="Open Router API Key"
                name="openrouter_api_key"
                value={openRouterApiKey}
                onChange={(e) => setOpenRouterApiKey(e.target)}
                placeholder="Paste Open Router API Key"
                linkTo="https://openrouter.ai/settings/keys"
            />

            <h2>
                Don't worry! All the API Keys are stored in the localStorage and
                doesn't gets stored outside your own browser. We don't store
                anything (couldn't afford bills for database yk...)
            </h2>
        </>
    );
}
