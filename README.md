# Professional Portfolio (MEAN Stack)

A unified **MEAN Stack** (MongoDB, Express, Angular, Node.js) portfolio application.

## 🏗️ Architecture
This project uses a unified directory structure:
- **Root**: Orchestration & scripts.
- **/client**: Angular 21 Frontend.
- **/server**: Node.js/Express Backend.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+) installed.
- MongoDB (optional - server warns but runs without it).

### 2. Installation
Install dependencies for both client and server from the root:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Running the Project (Development)
To run both the backend API and frontend builder simultaneously:
```bash
npm run dev
```
- **Access App**: [http://localhost:3000](http://localhost:3000)
- **Frontend Watch**: Runs in background (rebuilds on change).
- **Backend Watch**: Runs with Nodemon (restarts on specific changes).

### 4. Building for Production
To compile the Angular app into static files served by Express:
```bash
npm run build
```

Then start the production server:
```bash
npm start
```

## 🛠️ Features
- **Global Loader**: Animated start screen.
- **Dark Mode**: Toggleable theme with persistence.
- **Routing**: Full Angular routing strategy.
- **Case Studies**: Detailed project views.
- **AI Integration**: Chatbot & Transparency sections.
