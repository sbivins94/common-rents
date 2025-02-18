import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RenterFormPage from "./pages/RenterFormPage";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <KindeProvider
        clientId="96a2a828137b462c8cd4bb17b4b62482"
        domain="https://commonrents.kinde.com"
        redirectUri="http://localhost:3000"
        logoutUri="http://localhost:3000"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/renter-form" element={<RenterFormPage />} />
        </Routes>
      </KindeProvider>
    </Router>
  );
}

export default App;
