import {ResponseBox, PromptArea} from '../components';
import {useState, useEffect} from 'react'

export default function Home() {

    const [prompt, setPrompt] = useState('');

    const handlePrompt = (prompt) => {
        setPrompt(prompt);
    }


    return (
        <>
<h1>testing</h1>
            <ResponseBox prompt={prompt} />
            <ResponseBox prompt={prompt}/>

            <PromptArea onSend={handlePrompt} />

        </>
    )
}
