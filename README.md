# Student Management Application

## Description
A full-stack application to manage student records. This application allows users to perform basic CRUD operations like:
- Add a new student
- View all students
- Search for a student by name
- Update existing student details
- Delete a student record

## Backend
- Built with Spring Boot
- MySQL database
- REST API endpoints

## Frontend
- Built with React.js
- Axios for API communication

## Setup

1. Prerequisites
Ensure the following are installed on your system:

Node.js (version 14 or above)
npm (comes with Node.js)
2. Clone the Repository
Clone the frontend project to your local machine:
git clone https://github.com/your-username/student-management-frontend.git
cd student-management-frontend

3. Install Dependencies
Install all required npm packages:npm install

4.Configure the Backend URL
Update the Axios baseURL to point to your backend server in src/axiosConfig.js:

5. Start the Development Server
Start the React development server:npm start

The application will be available at :  http://localhost:3000

Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
npm build: Builds the app for production to the build folder.

Project Structure

src/
├── components/
│   ├── AddStudent.js        # Component to add a new student
│   ├── StudentList.js       # Component to list all students
│   ├── SearchStudent.js     # Component to search students
│   ├── UpdateStudent.js     # Component to update a student
│   └── DeleteConfirmation.js # Reusable component for delete confirmation
├── axiosConfig.js           # Axios configuration for API calls
├── App.js                   # Main application file
├── index.js                 # Entry point of the app
└── styles/    


Detailed Component Description
1. AddStudent.js
Purpose: Allows users to add a new student record.
API Call: POST /students
Form Fields:
Name (required)
Age (required)
Class (required)
Phone Number (required)
2. StudentList.js
Purpose: Displays a list of all student records.
API Call: GET /students
3. SearchStudent.js
Purpose: Allows users to search for students by name.
API Call: GET /students/search?name={name}
4. UpdateStudent.js
Purpose: Allows users to edit a student’s details.
API Call: PUT /students/{id}
5. DeleteConfirmation.js
Purpose: Shows a confirmation dialog before deleting a student.
API Call: DELETE /students/{id}
