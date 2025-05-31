# Todo App Backend

This is the backend for the Todo application, built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login)
- JWT-based authorization
- CRUD operations for tasks
- Task filtering by category, status, and date
- Task status toggling

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user

### Tasks

- `GET /api/tasks` - Get all tasks for the current user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `PATCH /api/tasks/:id/toggle` - Toggle task status
- `GET /api/tasks/category/:category` - Get tasks by category
- `GET /api/tasks/status/:status` - Get tasks by status
- `GET /api/tasks/date/:date` - Get tasks by date

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todo-app
   JWT_SECRET=your_jwt_secret_key_here
   ```

3. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## Connecting to Frontend

To connect this backend to the React frontend, update the API base URL in your frontend code to point to this server (e.g., `http://localhost:5000/api`).

## Authentication

For protected routes, include the JWT token in the Authorization header:
```
Authorization: Bearer your_jwt_token
``` 