# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
React GitHub Repository Viewer

This is a simple React application that allows users to view their GitHub repositories and explore details about each repository.

## Features

- Display a list of user's GitHub repositories using Github API
- Pagination for repositories list
- Search functionality to filter repositories by name
- View details of a single repository
- Error boundary for handling errors gracefully
- 404 Page Not Found for invalid routes
- Responsive layout for mobile and desktop devices
- Accessibility techniques implemented for better user experience

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/react-github-repo-viewer.git

2. Navigate to the project directory: cd react-github-repo-viewer

3. Install dependencies: npm install

4. Start the development server: npm run dev

5. Open browser to view application

Dependencies
React: A JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.
Axios: Promise-based HTTP client for making API requests.
Bootstrap: CSS framework for building responsive and mobile-first websites.
React Bootstrap: Bootstrap components built with React.

src
  /components
    - App.jsx
    - RepositoriesPage.jsx
    - RepositoryDetailPage.jsx
    - ErrorBoundary.jsx
    - NotFoundPage.jsx
  - main.js
/public
  - index.html
  - favicon.ico
  - ...
/package.json