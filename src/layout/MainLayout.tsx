"use client";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

const MainLayout = () => {
  const { isAuth, setAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    setAuth(false);
    navigate("login");
  };

  return (
    <div className="pt-8 min-h-screen bg-gray-100">
      <header className="">
        <ul className="flex items-center gap-4 justify-center ">
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            {isAuth ? (
              <button
                onClick={handleLogout}
                className="text-lg font-semibold hover:text-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to="login"
                className="text-lg font-semibold hover:text-red-600"
              >
                Login
              </Link>
            )}
          </li>
          <li>
            <Link
              to="register"
              className="text-lg font-semibold hover:text-red-600"
            >
              Register
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default MainLayout;
