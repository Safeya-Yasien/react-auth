"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

interface IAuthContextType {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "AuthContext is not available. Make sure to wrap your component with AuthProvider."
    );
  }
  return authContext;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setAuth] = useState(!!Cookies.get("token"));

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
