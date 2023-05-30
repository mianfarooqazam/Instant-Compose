// modified code 0.2
document.addEventListener('DOMContentLoaded', function() {
  const queryInput = document.getElementById('queryInput');
  const generateBtn = document.getElementById('generateBtn');
  const resultTextarea = document.getElementById('resultTextarea');
  const copyBtn = document.getElementById('copyBtn');
  const closeBtn = document.getElementById('closeBtn');

  generateBtn.addEventListener('click', function() {
    const query = queryInput.value.trim();
    if (query === '') {
      resultTextarea.value = 'Please enter a query.';
      return;
    }

    const requiredPhrase = 'write an email';
    if (!query.toLowerCase().includes(requiredPhrase)) {
      resultTextarea.value = 'Please include the phrase "write an email" in your query.';
      return;
    }

    generateBtn.disabled = true;
    generateBtn.classList.add('loading');
    generateBtn.innerText = 'Generating...';
    resultTextarea.value = '';

    const apiKey = 'OPEN_API_KEY'; 
    const url = 'https://api.openai.com/v1/chat/completions';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        'messages': [{'role': 'system', 'content': 'You: ' + query}],
        'model': 'gpt-3.5-turbo' // Replace with the desired language model identifier
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);

        if (data.choices && data.choices.length > 0) {
          const generatedText = data.choices[0].message.content;
          resultTextarea.value = generatedText;
        } else {
          resultTextarea.value = 'Unexpected response from the API.';
          console.error('Unexpected response:', JSON.stringify(data));
        }

        generateBtn.disabled = false;
        generateBtn.classList.remove('loading');
        generateBtn.innerText = 'Generate';
      })
      .catch(error => {
        resultTextarea.value = 'An error occurred. Please try again.';
        console.error('API error:', error);

        generateBtn.disabled = false;
        generateBtn.classList.remove('loading');
        generateBtn.innerText = 'Generate';
      });
  });

  copyBtn.addEventListener('click', function() {
    const resultText = resultTextarea.value;
    if (resultText === '') {
      return;
    }

    navigator.clipboard.writeText(resultText)
      .then(() => {
        console.log('Text copied to clipboard:', resultText);
        copyBtn.innerText = 'Copied!';
        setTimeout(function() {
          copyBtn.innerText = 'Copy';
        }, 2000);
      })
      .catch(error => {
        console.error('Error copying text:', error);
      });
  });

  closeBtn.addEventListener('click', function() {
    window.close();
  });
});


// modified code 0.1
// document.addEventListener('DOMContentLoaded', function() {
//   const queryInput = document.getElementById('queryInput');
//   const generateBtn = document.getElementById('generateBtn');
//   const resultTextarea = document.getElementById('resultTextarea');
//   const copyBtn = document.getElementById('copyBtn');
//   const closeBtn = document.getElementById('closeBtn');

//   generateBtn.addEventListener('click', function() {
//     const query = queryInput.value.trim();
//     if (query === '') {
//       resultTextarea.value = 'Please enter a query.';
//       return;
//     }

//     generateBtn.disabled = true; // Disable the button to prevent multiple clicks
//     generateBtn.classList.add('loading'); // Add the loading class to the button
//     generateBtn.innerText = 'Generating...'; // Update button text
//     resultTextarea.value = '';

//     const apiKey = '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'; // Replace 'YOUR_API_KEY_HERE' with your actual ChatGPT API key
//     const url = 'https://api.openai.com/v1/chat/completions';

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + apiKey,
//       },
//       body: JSON.stringify({
//         'messages': [{'role': 'system', 'content': 'You: ' + query}],
//         'model': 'gpt-3.5-turbo' // Replace with the desired language model identifier
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('API response:', data); // Log the full API response to the console

//         if (data.choices && data.choices.length > 0) {
//           const generatedText = data.choices[0].message.content;
//           resultTextarea.value = generatedText;
//         } else {
//           resultTextarea.value = 'Unexpected response from the API.';
//           console.error('Unexpected response:', JSON.stringify(data));

//         }

//         generateBtn.disabled = false; // Enable the button after receiving the response
//         generateBtn.classList.remove('loading'); // Remove the loading class from the button
//         generateBtn.innerText = 'Generate'; // Reset button text
//       })
//       .catch(error => {
//         resultTextarea.value = 'An error occurred. Please try again.';
//         console.error('API error:', error);

//         generateBtn.disabled = false; // Enable the button after encountering an error
//         generateBtn.classList.remove('loading'); // Remove the loading class from the button
//         generateBtn.innerText = 'Generate'; // Reset button text
//       });
//   });

//   copyBtn.addEventListener('click', function() {
//     const resultText = resultTextarea.value;
//     if (resultText === '') {
//       return; // Nothing to copy if the result is empty
//     }

//     navigator.clipboard.writeText(resultText)
//       .then(() => {
//         console.log('Text copied to clipboard:', resultText);
//         // Optionally provide some visual feedback to the user
//         copyBtn.innerText = 'Copied!';
//         setTimeout(function() {
//           copyBtn.innerText = 'Copy';
//         }, 2000);
//       })
//       .catch(error => {
//         console.error('Error copying text:', error);
//       });
//   });

//   closeBtn.addEventListener('click', function() {
//     // Close the extension popup
//     window.close();
//   });
// });


// orignal code 
// document.addEventListener('DOMContentLoaded', function() {
//     const queryInput = document.getElementById('queryInput');
//     const generateBtn = document.getElementById('generateBtn');
//     const resultTextarea = document.getElementById('resultTextarea');
//     const copyBtn = document.getElementById('copyBtn');
//     const closeBtn = document.getElementById('closeBtn');

//     copyBtn.addEventListener('click', function() {
//       const resultText = resultTextarea.value;
//       if (resultText === '') {
//         return; // Nothing to copy if the result is empty
//       }
    
//       navigator.clipboard.writeText(resultText)
//         .then(() => {
//           console.log('Text copied to clipboard:', resultText);
//           // Optionally provide some visual feedback to the user
//           copyBtn.innerText = 'Copied!';
//           setTimeout(function() {
//             copyBtn.innerText = 'Copy';
//           }, 2000);
//         })
//         .catch(error => {
//           console.error('Error copying text:', error);
//         });
//     });
//     generateBtn.addEventListener('click', function() {
//       const query = queryInput.value.trim();
//       if (query === '') {
//         resultTextarea.value = 'Please enter a query.';
//         return;
//       }
  
//       const apiKey = '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'; // Replace with your actual ChatGPT API key
//       const url = 'https://api.openai.com/v1/chat/completions';
  
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + apiKey,
//         },
//         body: JSON.stringify({
//           'messages': [{'role': 'system', 'content': 'You: ' + query}],
//           'model': 'gpt-3.5-turbo' // Replace with the desired language model identifier
//         }),
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('API response:', data); // Log the full API response to the console
  
//           if (data.choices && data.choices.length > 0) {
//             const generatedText = data.choices[0].message.content;
//             resultTextarea.value = generatedText;
//           } else {
//             resultTextarea.value = 'Unexpected response from the API.';
//             console.error('Unexpected response:', data);
//           }
//         })
//         .catch(error => {
//           resultTextarea.value = 'An error occurred. Please try again.';
//           console.error('API error:', error);
//         });
//     });
  
//     closeBtn.addEventListener('click', function() {
//       // Close the extension popup
//       window.close();
//     });
//   });
  
