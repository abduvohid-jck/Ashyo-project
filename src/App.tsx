import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Profile from "./pages/Profile";
import type { ReactNode } from "react";
function isAuth() {
  return localStorage.getItem("token") !== null;
}

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  return isAuth() ? children : <Navigate to="/" />;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
          path="/profile"
        />
      </Routes>
    </div>
  );
}

export default App;
