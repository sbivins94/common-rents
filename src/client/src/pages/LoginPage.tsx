import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function LoginPage() {
  const { login, register } = useKindeAuth();
  return (
    <div>
      <h2>Login</h2>
      <p>Please log in to your account.</p>
      <button onClick={() => register()} type="button">
        Register
      </button>
      <button onClick={() => login()} type="button">
        Log In
      </button>
    </div>
  );
}

export default LoginPage;
