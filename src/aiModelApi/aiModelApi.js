import detectAIModelName from '@/utils/aiModelDetector.js';
import handleError from '@/utils/errorHandler.js';
import fetchRateLimit from "@/aiModelApi/rateLimit.js";

async function aiModelApi({ prompt, modelName, onChunk, onError }) {
    const apiKey = localStorage.getItem('openrouter_api_key');
    const controller = new AbortController();

    try {
        const model = detectAIModelName(modelName);

        if (!model) {
            handleError('AI Model API', `No such model found: ${modelName}`);
        }

        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: 'user',
                            content:
                                prompt ||
                                'Say the following to the user: Hello, welcome to AI-m! This was developed by prana-w.',
                        },
                    ],
                    stream: true,
                }),
                signal: controller.signal
            },
        );

        if (!response.ok) {
            handleError(
                'AI Model API',
                `Error: ${response.status} ${response?.statusText}`,
            );
            // onError('');
            return;
        }

        const reader = response?.body?.getReader();
        if (!reader) {
            handleError('AI Model API', 'Response body is not readable');
            return;
        }

        const decoder = new TextDecoder();
        let buffer = '';

        try {
            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                // Append new chunk to buffer
                buffer += decoder.decode(value, { stream: true });

                // Process complete lines from buffer
                while (true) {
                    const lineEnd = buffer.indexOf('\n');

                    if (lineEnd === -1) break;

                    const line = buffer.slice(0, lineEnd).trim();
                    buffer = buffer.slice(lineEnd + 1);

                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') break;

                        try {
                            const parsed = JSON.parse(data);
                            const content = parsed.choices[0].delta.content;

                            if (content) {
                                console.log(content);
                                onChunk(content);
                            }
                        } catch (err) {
                            handleError('AI Model API', err);
                            return;
                        }
                    }
                }
            }
        } finally {
            reader.cancel();

            const something = await fetchRateLimit()
            console.log(something)
            // const savedCount = localStorage.getItem('daily_request_count');
            // localStorage.setItem('daily_request_count', savedCount+1)
            console.log('Stream reading completed!');
        }
    } catch (err) {
        handleError('AI Model API', err);
        return;
    }
}

export default aiModelApi;
