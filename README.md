# File Upload System with Vite & React

This project is a File Upload System developed using React and Vite for the frontend, with the backend API for file handling built in Node.js. The system allows users to upload multiple files at once, view the selected files with their extensions, and display progress while the files are being uploaded. The application is designed to be highly responsive and user-friendly, enabling users to easily upload files with minimal steps.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Features

- **Multiple File Selection:** Users can select multiple files for upload in a single action.
- **File Preview:** Displays a preview of selected files before uploading, including their file name and extension.
- **Progress Indicator:** A real-time upload progress indicator for better user experience.
- **Environment-Specific Configuration:** The API endpoint URL is configurable based on the environment (development, production) using Vite's .env variable system, allowing easy configuration of backend URLs.
- **File Type Validation:** Ensures only the desired file types (e.g., images, documents) can be uploaded, preventing unsupported formats.
- **Responsive Design:** The application is designed to be responsive, ensuring it works seamlessly across different screen

## Technologies Used

- **Frontend:**
  - React.js
  - Axios (for API calls)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (for MongoDB object modeling)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/shitu13/file-upload-system.git
cd file-upload-system
```
### Install Dependencies

- Backend: Navigate to the backend directory and install the dependencies.

```
cd backend
npm install
```
- Frontend: Navigate to the frontend directory and install the dependencies.

```
cd frontend
npm install
```

### Running the Application
- Make sure your MongoDB server is running.

- Navigate to the backend directory and run:
```
cd backend
npm run dev
```
The backend server will run on http://localhost:5000 (or whichever port you specify in your configuration).

- Navigate to the frontend directory and run:
```
cd frontend
npm run dev
```
The frontend application will run on http://localhost:5173

