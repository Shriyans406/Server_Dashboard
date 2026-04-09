# Linux Server Dashboard

A professional monitoring dashboard for Linux systems. This application provides a web interface for real-time system metrics, process management, service control, and log viewing.

## Objective
The project centralizes system administration tasks into a single web dashboard. It eliminates the need for manual execution of various command-line tools for basic monitoring and management.

## Architecture
The system is built with a decoupled client-server architecture.

- **Backend**: An Express.js server that interfacing with the Linux system via shell scripts. It uses standard utilities like top, free, df, systemctl, and journalctl to retrieve system state.
- **Frontend**: A React application using Vite for builds and Tailwind CSS for styling. It features a responsive layout and data visualization using Recharts.

## Features
- **System Metrics**: Live tracking of CPU, Memory, and Disk usage via interactive charts.
- **Process Management**: View running processes and terminate them if necessary.
- **Service Control**: View status and manage systemd services (Start, Stop, Restart).
- **Log Viewer**: List and view system logs directly from the browser.

## Prerequisites
- Linux OS
- Node.js (v18+)
- npm or yarn
- systemd (required for service management)

## Installation

### 1. Clone the project
```bash
git clone <repository-url>
cd linux-server-dashboard
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
The backend runs on port 5000.

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
The frontend runs on port 5173.

## Project Structure
```text
.
├── backend
│   ├── controllers     # Route handlers for different system components
│   ├── routes          # API endpoints
│   ├── scripts         # Shell scripts for direct system interaction
│   └── server.js       # Main server entry point
├── frontend
│   ├── src
│   │   ├── api         # Axios instances for backend communication
│   │   ├── components  # UI components (Charts, Tables, Panels)
│   │   └── App.jsx     # Main application component
│   └── tailwind.config.js
└── README.md
```

## Usage
Navigate to the frontend port in your browser. The dashboard polls the backend every 5 seconds for updated system metrics. Use the individual panels to manage processes or services as needed.
