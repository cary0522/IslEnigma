import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// 共用 css 樣式
import "./components/allReset.css";
import "./components/reset.scss";
import "./components/layout/header.css";
import "./components/layout/footer.css";
import "./components/reset.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
