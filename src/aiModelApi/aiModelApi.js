import OpenAI from 'openai';
import { instructions } from '@/constants/instrutions.js';
import handleError from '@/utils/errorHandler.js';
import detectAIModelName from '@/utils/aiModelDetector.js';

async function temp({ prompt, modelName, onChunk, onLoading }) {
    const apiKey = localStorage.getItem('openrouter_api_key');

    const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: `https://openrouter.ai/api/v1`,
        dangerouslyAllowBrowser: true,
    });

    const model = detectAIModelName(modelName);

    try {
        onLoading(true);

        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: `${instructions}` },
                {
                    role: 'user',
                    content: `${prompt || 'Say the following to the user: Hello, welcome to AI-m! This was developed by prana-w. Please enter a prompt!'}`,
                },
            ],
            stream: true,
        });

        for await (const chunk of completion) {
            onLoading(false);
            onChunk(chunk.choices[0].delta.content);
        }
    } catch (err) {
        onLoading(false);
        handleError('AI Model API', err);
    }
}

export default temp;
