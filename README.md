# InstantCompose Chrome Extension

InstantCompose is a Chrome extension that helps users write automatic emails using the ChatGPT API. With this extension, you can generate email drafts by providing a query, and the ChatGPT model will assist in composing a response. The generated email can then be copied and used in your email client.

## Features

- Quickly generate email drafts using the ChatGPT API.
- Easy-to-use interface with an input field for queries and a button to generate emails.
- Copy generated emails to the clipboard for easy access.
- Responsive design for a seamless user experience.

## Installation

To install the InstantCompose Chrome Extension:

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner of the page.
4. Click on "Load unpacked" and select the folder containing the extension's source code.
5. The InstantCompose extension should now be installed and visible in your Chrome browser toolbar.

## Usage

1. Click on the InstantCompose extension icon in your Chrome toolbar.
2. In the popup window, enter your query in the input field. Make sure to include the phrase "write an email" in your query to generate an email draft.
3. Click the "Generate" button to initiate the email generation process.
4. Wait for the response from the ChatGPT API. An animation will indicate that the response is being generated.
5. Once the response is ready, the generated email draft will appear in the textarea below.
6. To use the generated email, click the "Copy" button to copy the email draft to your clipboard.
7. Paste the copied email draft into your preferred email client or editor to finalize and send the email.

## Configuration

Before using the InstantCompose Chrome Extension, you need to provide your own ChatGPT API key. Follow these steps to configure the API key:

1. Open the `ext.js` file in the extension's source code.
2. Locate the `apiKey` variable near the top of the file.
3. Replace `'YOUR_API_KEY_HERE'` with your actual ChatGPT API key.
4. Save the changes to the `ext.js` file.

Note: Make sure to keep your API key secure and avoid sharing it publicly.

## Feedback and Support

If you encounter any issues, have suggestions, or need support, please feel free to [create an issue](https://github.com/your-username/your-repo-name/issues) in the GitHub repository. We appreciate your feedback and will do our best to address any concerns.

## License

This project is licensed under the [MIT License](LICENSE).

