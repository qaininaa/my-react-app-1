import React from "react";
import LoginPage from "./pages/login";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginForm from "./components/Fragments/LoginForm";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
