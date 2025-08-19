import detectAIModelName from '@/utils/aiModelDetector.js';

async function aiModelApi({ prompt, modelName }) {
    try {
        const model = detectAIModelName(modelName);

        if (!model) {
            throw new Error(`No such model found!`);
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_OPEN_ROUTER_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model,
                messages: [{ role: 'user', content: prompt || 'Say the following to the user: Hello, welcome to AI-m! This was developed by prana-w.' }],
                stream: true,
            }),
        });

        const reader = response?.body?.getReader();
        if (!reader) {
            throw new Error('Response body is not readable');
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
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    }
                }
            }
        } finally {
            reader.cancel();
        }
    } catch (err) {
        console.error(err);
    }
}

export default aiModelApi;
