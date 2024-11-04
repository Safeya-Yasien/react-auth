"use client";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuth } = useAuthContext();

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2lg font-bold p-12">
        {isAuth ? "Hello User" : "Home"}
      </h1>
    </div>
  );
};

export default Home;
