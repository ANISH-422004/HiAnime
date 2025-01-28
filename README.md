# HiAnime

.



Overview

This is a React-based web application that provides a rich UI experience for browsing movies, TV shows, and people. It uses Redux Toolkit for state management and Tailwind CSS for styling. The project integrates with an external API to fetch and display dynamic data.

Features

Search functionality with real-time suggestions

Trending and popular movies/TV shows listing

Detailed pages for movies, TV shows, and actors

Responsive UI with Tailwind CSS

Redux Toolkit for state management

Axios for API requests

React Router for navigation

Glassmorphism UI theme for a modern look

Folder Structure

React-Major-Project
│── node_modules/
│── public/
│── src/
│   │── assets/
│   │   │── 404.gif
│   │   │── loader.gif
│   │   │── noimage.jpg
│   │   │── tv-fill.svg
│   │
│   │── components/
│   │   │── templates/
│   │   │   │── Cards.jsx
│   │   │   │── Dropdown.jsx
│   │   │   │── Header.jsx
│   │   │   │── HorizontalCards.jsx
│   │   │   │── Loader.jsx
│   │   │   │── SideBar.jsx
│   │   │   │── TopNav.jsx
│   │   │── Trailer.jsx
│   │   │── Home.jsx
│   │   │── Movie.jsx
│   │   │── MovieDetails.jsx
│   │   │── NotFound.jsx
│   │   │── People.jsx
│   │   │── PersonDetails.jsx
│   │   │── Popular.jsx
│   │   │── Trending.jsx
│   │   │── TVShows.jsx
│   │   │── TVShowsDetails.jsx
│   │
│   │── store/
│   │   │── actions/
│   │   │   │── movieActions.jsx
│   │   │   │── personActions.jsx
│   │   │   │── tvActions.jsx
│   │   │── reducers/
│   │   │   │── movieSlice.jsx
│   │   │   │── personSlice.jsx
│   │   │   │── tvSlice.jsx
│   │   │── store.js
│   │
│   │── utils/
│   │── App.jsx
│   │── index.css
│   │── main.jsx
│
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── postcss.config.js
│── README.md
│── tailwind.config.js
│── vite.config.js

Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/react-major-project.git
cd react-major-project

Install dependencies:

npm install

Start the development server:

npm run dev

Open in browser: http://localhost:5173

Technologies Used

React.js - Frontend framework

Redux Toolkit - State management

React Router - Navigation

Axios - API requests

Tailwind CSS - Styling

Vite - Fast development server

Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome! 😊

License

This project is open-source and available under the MIT License.

