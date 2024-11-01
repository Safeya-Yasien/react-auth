import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="p-8 ">
      <header className="">
        <ul className="flex items-center gap-4 justify-center ">
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className="text-lg font-semibold hover:text-red-600"
            >
              Login
            </Link>
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
