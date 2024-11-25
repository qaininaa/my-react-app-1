import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ul>
          <li>
            <button
              type="button"
              className="border-2 bg-blue-700 text-white p-2 px-4 text-sm"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
