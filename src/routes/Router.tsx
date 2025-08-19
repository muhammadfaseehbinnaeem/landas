import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTE } from "./route";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import AuthLayout from "@/shared/layouts/AuthLayout";
import MainLayout from "@/shared/layouts/MainLayout";
import { useAuthStore } from "@/stores/authStore";

function Protected({ children }: { children: React.ReactNode }) {
  const isAuthed = useAuthStore((s) => s.isAuthenticated);
  if (!isAuthed) return <Navigate to={ROUTE.LOGIN} replace />;
  return <>{children}</>;
}

export const appRouter = createBrowserRouter([
  {
    path: ROUTE.LOGIN,
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: ROUTE.HOME,
    element: (
      <Protected>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Protected>
    ),
  },
]);
