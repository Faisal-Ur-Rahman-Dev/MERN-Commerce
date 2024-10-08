import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header.jsx"; // Assuming the header is a common component
import Footer from "../Components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
