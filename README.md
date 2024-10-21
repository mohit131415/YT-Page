# YouTube Clone

This project is a simple YouTube clone built with React. It fetches video data from a mock API and displays it in a user-friendly interface. Users can filter videos based on different categories, making it easy to find content that suits their interests.

## Features

- **Dynamic Video Display**: Fetches and displays video data, including thumbnails, titles, channels, views, and upload times.
- **Filtering Options**: Users can filter videos by categories such as Music, Gaming, Movies, News, Live, Sports, or view all videos.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive to different screen sizes.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/mohit131415/YT-Page.git
cd YT-Page
npm install


Usage
Once the dependencies are installed, you can run the application using:

bash
Copy code
npm start
This will start the development server, and you can view the application in your browser at http://localhost:3000.

Live Demo
You can view a live demo of the project at Live Demo Link (Replace with your live link).

Code Explanation
The main application component is App.js, where the following functionalities are implemented:

State Management: Uses React hooks to manage the state of videos, loading status, and active filters.
Data Fetching: Retrieves video data from a mock API using the Fetch API.
Video Rendering: Maps through the fetched video data to display each video along with its details in a grid layout.
View Count Formatting: Formats the view count into a more readable format (e.g., '1.2M' for one million views).
Technologies Used
React
CSS
JavaScript
License
This project is licensed under the MIT License. See the LICENSE file for details.



You can copy this entire block into your `README.md` file. Remember to replace the placeholder for the live demo link with the actual URL when it's available!
