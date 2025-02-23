import React, { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function LoginPage() {
  const { login, register } = useKindeAuth();

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <p>Log in using Kinde</p>
      <div className="mb-3"></div>
      <button className="btn btn-primary" onClick={() => login()}>
        Login
      </button>
      <button className="btn btn-secondary" onClick={() => register()}>
        Register
      </button>
    </div>
  );
}

export default LoginPage;
