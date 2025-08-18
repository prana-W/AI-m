import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

//async function main() {
// const response = await ai.models.generateContentStream({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works",
// });

// for await (const chunk of response) {
//     console.log(chunk.text);
// }

// console.log(response.text);
// }

export default async function gemini_2_5_flash() {
    console.log('check');
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'How does AI work?',
    });
    console.log(response.text);
}
