# React + Express Greeting App

This is a simple **React + Express** application that allows users to enter their name and receive a greeting message from the backend API.

## 📌 Features
- Frontend built with **React & Vite**
- Backend powered by **Express.js**
- API call handled using **Axios**
- Supports **environment variables (.env) for backend URL**
- Cross-Origin Resource Sharing (**CORS**) enabled

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/YoungsLabAssignment
cd YoungsLabAssignment
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```

#### Backend
```sh
cd backend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file inside the **frontend** directory and add:
```
VITE_BACKEND_URI=http://localhost:4000
```

### 4️⃣ Run the Application
#### Start Backend Server
```sh
cd backend
node server.js
```

#### Start Frontend
```sh
cd frontend
npm run dev
```

### 5️⃣ Usage
1. Open your browser and go to: `http://localhost:5173`
2. Enter your name in the input field and click **"Get Greeting"**
3. The backend API will return a personalized greeting message.

## 📂 Project Structure
```
project-root/
│── backend/
│   ├── server.js        # Express.js backend
│   ├── package.json     # Backend dependencies
│── frontend/
│   ├── src/
│   │   ├── App.jsx      # React frontend
│   │   ├── main.jsx     # Entry point
│   ├── package.json     # Frontend dependencies
│   ├── .env             # Environment variables
│── README.md            # Documentation
```

## ⚙ API Endpoints
| Method | Endpoint       | Description             |
|--------|--------------|-------------------------|
| `GET`  | `/api/greet` | Returns greeting message |

### Example Request
```sh
GET /api/greet?name=Shamsher
```
### Example Response
```json
{
  "message": "Hello Shamsher! Welcome to Youngslab."
}
```

## 🛠 Troubleshooting
### AxiosError
- Ensure the **backend is running** (`node server.js`)
- Check the `.env` variable (`VITE_BACKEND_URI`)
- Restart the frontend: `npm run dev`
- Check if **CORS is enabled** in `server.js`

### Port Issues
- Change the frontend port in `vite.config.js` if needed:
```js
defineConfig({
  server: { port: 5173 }
})
```

## 📜 License
This project is open-source and available under the **MIT License**.

---

🚀 **Happy Coding!** 😊

