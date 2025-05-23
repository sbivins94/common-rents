import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoginPage from "./pages/renters/RenterLoginPage";
import RenterFormPage from "./pages/renters/RenterFormPage";
import "./App.css";

function App() {
  const { isAuthenticated } = useKindeAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-renter" element={<LoginPage />} />
        <Route path="/renter-form" element={<RenterFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
