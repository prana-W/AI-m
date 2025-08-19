import OpenAI from "openai";
import {instructions} from "@/constants/instrutions.js";
import handleError from "@/utils/errorHandler.js";

const openai = new OpenAI({
    apiKey: `${import.meta.env.VITE_GEMINI_KEY}`,
    baseURL: `${window.location.origin}/api/gemini/v1beta/openai/`,
    dangerouslyAllowBrowser: true,
});


async function openAiApi({ prompt, modelName, onChunk, onLoading}) {


    try {

        onLoading(true);

        const completion = await openai.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                {"role": "system", "content": `${instructions}`},
                {"role": "user", "content": `${prompt || 'Say the following to the user: Hello, welcome to AI-m! This was developed by prana-w. Please enter a prompt!'}`}
            ],
            stream: true,
        });

        for await (const chunk of completion) {
            onLoading(false);
            onChunk(chunk.choices[0].delta.content);
        }

    }
    catch (err) {

        onLoading(false);
        handleError('AI Model API', err);


    }

}

export default openAiApi;