## Backend Setup Guide

This repository contains the backend codebase for the file sharing application. Below are the instructions to set up and run the backend server locally.

### Cloning the Repository

```bash
git clone https://github.com/subham24092001/filesharingbackend.git
```

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Navigate to the project directory:

```bash
cd filesharingbackend
```

2. Install dependencies:

```bash
npm install
```

### Configuration

Before running the server, make sure to configure the following settings in the `.env` file:

- `PORT`: Port number on which the server will run.
- `MONGODB_URI`: URI for connecting to your MongoDB database.

### Starting the Server

To start the backend server, run the following command:

```bash
npm start
```

This command will start the server and make it listen for incoming requests.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Multer (for file uploads)

