// script.js

// script.js

require('dotenv').config();
const OpenAI = require('openai');
 

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


    // script.js

// Import the openai package


// Replace 'your-api-key' with your actual OpenAI API key


// Initialize the OpenAI client
const openai = new OpenAI({ key: OPEN_API_KEY });

// Function to generate a prompt and display the result
async function generatePrompt() {
  try {
    // Example prompt
    const prompt = 'Translate the following English text to French:';

    // Call the OpenAI API
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 50, // Adjust as needed
    });

    // Display the generated text in the console
    console.log(response.choices[0].text);

    // You can update your HTML content with the generated text here
    // For example, update a specific div with the result
    document.getElementById('openai-result').innerText = response.choices[0].text;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the generatePrompt function when the page loads
document.addEventListener('DOMContentLoaded', generatePrompt);

