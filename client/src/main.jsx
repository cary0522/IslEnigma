import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { AuContextProvider } from "./context/AuthContext.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuContextProvider>
          <App />
        </AuContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
