import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routers/AppRouter.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);
