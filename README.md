# ShrinkLink: Your URL Shortener Extension

ShrinkLink is a Chrome extension that allows you to easily shorten URLs directly from your browser. This project leverages a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js, Express.js, and MongoDB.

## Features

- Shorten URLs quickly and easily.
- Copy shortened URLs to your clipboard.
- Manage and view your shortened URLs.

## Technologies
1. **Frontend:** HTML, CSS, JavaScript, Bootstrap
2. **Backend:** Node.js, Express.js, MongoDB 

## Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/your-username/shrinklink.git
    ```
2. **Navigate to the project directory:**
    ```
    cd shrinklink
    ```
3. **Install the necessary dependencies:**
    ```
    cd backend
    npm install
    ```
4. **Set up environment variables:** Create a .env file in the backend directory and add the following variables:
    ```
    MONGO_URI=your_mongodb_uri
    PORT=your_preferred_port
    ```
5. **Start the backend server:**
    ```
    nodemon index.js
    ```
6. **Load the Chrome extension:**
    - Open Chrome and navigate to chrome://extensions/.
    - Enable "Developer mode" (toggle in the top right corner).
    - Click on "Load unpacked" and select the frontend directory.

## Usage
- Click on the ShrinkLink extension icon in the Chrome toolbar.
- Enter the URL you want to shorten and click "Shorten."
- Copy the shortened URL to your clipboard.

## License
This project is licensed under the <a href="https://github.com/Anmol-Gup/ShrinkLink/blob/main/LICENSE">MIT License</a> - see the LICENSE file for details.

## Acknowledgments
- <a href="https://nodejs.org/">Node.js</a> for the backend runtime environment.
- <a href="https://expressjs.com/">Express.js</a> for the web application framework.
- <a href="https://www.mongodb.com/">MongoDB</a> for the database.
- <a href="https://developer.chrome.com/docs/extensions/get-started">Chrome Extension Documentation</a> for extension development guidance.
