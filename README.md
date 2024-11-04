Here’s the completed README file for the **PestEasy - Pest Control Management System**:

---

# PestEasy - Pest Control Management System

PestEasy is a comprehensive pest control management system built with Angular on the frontend and NestJS on the backend. The system helps pest control businesses streamline their operations, manage jobs, clients, staff, schedules, and roles, and improve overall efficiency.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

### 1. User and Role Management

- Role-based access control with customizable permissions.
- Manage business users, staff, and clients.
- Superadmin role with full control.

### 2. Job and Schedule Management

- Create, update, assign, and track pest control jobs.
- Time-based job scheduling with custom start and end times.
- Track the job timeline and filter jobs by parameters like assigned staff and schedule.

### 3. Scheduling and Location

- Manage schedules, including multiple locations with per-day slot management.
- Handle geolocation data (coordinates only).

### 4. Email Functionality

- Support for sending emails to multiple recipients.
- Integrated email feature for businesses to contact clients/staff.

### 5. Notifications

- Receive job-related notifications (new jobs, schedule changes, etc.).
- Customizable notification preferences per user.

### 6. Reports and Analytics

- Generate reports for jobs, clients, and staff performance.
- Track job status, completion rates, and schedules with detailed insights.

## Technologies

**Frontend:**

- Angular
- TypeScript
- SCSS
- ngx-material-timepicker (for time selection)

**Backend:**

- NestJS
- MongoDB (Mongoose ODM)
- TypeScript
- Swagger (for API documentation)
- NodeMailer (for email functionality)

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **Angular CLI**: Install the Angular CLI globally:
  ```bash
  npm install -g @angular/cli
  ```
- **MongoDB**: Make sure MongoDB is installed and running locally, or have access to a remote MongoDB instance.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/pesteasy.git
   cd pesteasy
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Running the Backend**:
   Make sure MongoDB is running and use the following command to start the backend (NestJS) server:
   ```bash
   npm run start:dev
   ```

2. **Running the Frontend**:
   Navigate to the frontend folder and start the Angular development server:
   ```bash
   ng serve
   ```

3. **Access the Application**:
   - Frontend: Visit `http://localhost:4200` in your browser.
   - Backend API: Access the backend API at `http://localhost:3000`.

## Project Structure

```
pesteasy/
├── backend/              # Backend (NestJS) codebase
│   ├── src/              # Application source code
│   ├── test/             # Tests
│   ├── .env              # Environment variables
│   ├── package.json      # Dependencies for backend
└── frontend/             # Frontend (Angular) codebase
    ├── src/              # Application source code
    ├── environments/     # Environment configurations
    ├── .angular-cli.json # Angular configuration
    ├── package.json      # Dependencies for frontend
```

## API Documentation

The API documentation for PestEasy is available through Swagger. To explore the API, visit:

[Swagger API Documentation](https://dev.backend.pesteasyapp.com/docs)

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a complete overview of PestEasy, including features, installation instructions, project structure, and the API documentation link.# hubspot-angular
