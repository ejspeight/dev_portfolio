# Dev Portfolio

Dev Portfolio is a comprehensive web development project that includes both frontend and backend components for showcasing your developer portfolio and managing related data.

## Overview

Dev Portfolio comprises:

- **Frontend**: Developed using Next.js and Tailwind CSS, the frontend provides an intuitive and responsive user interface for showcasing your projects, skills, and achievements.

- **Backend**: Powered by FastAPI with Python, the backend serves as the engine for managing user data, projects, and other portfolio-related information. It utilizes AWS RDS (Relational Database Service) with MySQL to store and retrieve data efficiently.

## Features

- **Next.js with Tailwind CSS**: A modern frontend framework combined with a utility-first CSS framework for rapid development and a polished UI.

- **FastAPI with Python**: A high-performance backend framework that enables the creation of robust and scalable APIs with minimal boilerplate code.

- **AWS RDS / MySQL Integration**: 

The MySQL database within AWS RDS houses various tables designed to store essential data related to your portfolio, including:

- **Posts**: Stores information about portfolio posts, including titles, content, authors, timestamps, etc.
- **Projects**: Contains details about the projects, such as project names, descriptions, technologies used, etc.

## Installation

### Prerequisites

- Node.js
- Python 3.x

### Frontend (Next.js with Tailwind CSS)

1. Navigate to the `frontend` directory:

```console
cd dev_portfolio\frontend
```

2. Install dependencies:

```console
npm install
```

### Backend (FastAPI with Python)

1. Navigate to the `backend` directory:

```console
cd dev_portfolio\backend
```

2. Install dependencies:

```console
pip install -r requirements.txt
```


## Development

### Frontend

The frontend is built using Next.js and Tailwind CSS.

To start the frontend development server:

```console
npm run dev
```

### Backend

The backend is built using FastAPI with Python and uses AWS RDS/MySQL for the database.

To spin up the backend server:

```console
uvicorn main:app --reload
```