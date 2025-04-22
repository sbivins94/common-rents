import React, { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import KindeUser from "../../types/KindeUser";

function LoginPage() {
  const { login, register, getUser } = useKindeAuth();

  const handlelogin = async () => {
    try {
      await login();
      const renter: KindeUser = getUser();
      if (renter) {
        console.log("User logged in:", renter);

      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  const handleRegister = async () => {
    await register();
    const renter = getUser();
    if (renter) {
      console.log("User registered:", renter);
      await storeRenterInDB(renter);
    }
  };

  const storeRenterInDB = async (user: KindeUser) => {
    const transformedUser = {
      firstName: user.given_name,
      lastName: user.family_name,
      email: user.email,
      kindeId: user.id
    };

    try {
      const response = await fetch('http://localhost:5000/api/v1/renters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transformedUser),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Renter stored in DB:', data);
    } catch (error) {
      console.error('Error storing renter in DB:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <p>Log in using Kinde</p>
      <div className="mb-3"></div>
      <button className="btn btn-primary" onClick={() => handlelogin()}>
        Login
      </button>
      <button className="btn btn-secondary" onClick={() => handleRegister()}>
        Register
      </button>
    </div>
  );
}

export default LoginPage;
