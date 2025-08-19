const apiKey = localStorage.getItem('openrouter_api_key');

async function fetchRateLimit() {

    if (apiKey) {
        const response = await fetch('https://openrouter.ai/api/v1/key', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        return await response.json();

    }


}

export default fetchRateLimit;