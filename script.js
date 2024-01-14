// script.js

// script.js

require('dotenv').config();



const OPEN_API_KEY = process.env.OPENAI_API_KEY;

const apiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions';

// Example: Fetching an OpenAI prompt
fetch(apiEndpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        prompt: 'Generate a creative text prompt here.'
    })
})
    .then(response => response.json())
    .then(data => {
        // Assuming the response contains generated text
        document.getElementById('openai-prompt').innerText = data.choices[0].text;
    })
    .catch(error => console.error('Error fetching OpenAI prompt:', error));

// You can add more JavaScript code as needed for your website
