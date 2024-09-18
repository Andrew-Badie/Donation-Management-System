# Donation Management System 💰📲

A mobile donation management system built with React Native, currently in development to integrate Square's Terminal API for secure payment processing. The app aims to facilitate easy donation management and enhance accuracy for church donations.

Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
Code Structure
Future Enhancements
Contributions
License
## Introduction

The Donation Management System is designed to streamline the process of collecting donations using a mobile app. Built with React Native for the frontend, the app is currently being developed to integrate Square's Terminal API for secure payment processing. This project demonstrates key skills in mobile development and payment processing system integration.

## Features

User-Friendly Interface: A simple and intuitive interface for entering donation amounts.
Real-Time Status Updates: Displays payment status to the user upon initiation.
Backend Integration: Currently working on integrating with an Express server to handle payment processing requests.
Cross-Origin Resource Sharing (CORS): Enabled for secure communication between the frontend and backend (in development).
## Technologies Used

React Native: For building the mobile application interface.
Express: Backend server (in development) for handling API requests.
Square Terminal API: Integration in progress for secure payment processing.
Axios: To handle HTTP requests from the React Native app to the backend.
Node.js: Server environment for running the Express app.
JavaScript: Programming language used throughout the project.
## Installation

To run the project locally, follow these steps:

Clone the repository: ```bash git clone https://github.com/yourusername/donation-management-system.git ```

Navigate to the project directory: ```bash cd donation-management-system ```

Install dependencies for both the React Native app and the backend:

For the React Native app: ```bash cd frontend npm install ```
For the Express backend (in development): ```bash cd backend npm install ```
Set up environment variables (for future API integration):

Create a .env file in the backend directory with your Square access token: ``` SQUARE_ACCESS_TOKEN=your_square_access_token ```
Run the backend server (for testing): ```bash cd backend npm start ```

Run the React Native app:

If using an emulator: ```bash cd frontend npm start ```
Follow the instructions to open the app on an emulator or physical device.
## Usage

Open the app on your mobile device or emulator.
Enter the donation amount in the input field.
Press the "Pay now" button to (eventually) initiate the payment once the integration is complete.
View the payment status: The app displays a message indicating the status of the payment (success or failure).
## Code Structure

Frontend (React Native):

App.js: Main file handling user input, payment status, and interaction with the backend.
Axios: Used for sending payment initiation requests to the backend.
Backend (Express):

server.js: Main server file (in development) for handling payment processing using Square's Terminal API.
Environment Variables: Stores the Square access token securely in a .env file.
## Future Enhancements

Complete API Integration: Finish the integration of Square's Terminal API for secure payment processing.
User Authentication: Add a login system to track donations made by individual users.
Donation History: Store donation records in a database for future reference and reporting.
## Contributions

Contributions are welcome! If you have suggestions for new features or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

