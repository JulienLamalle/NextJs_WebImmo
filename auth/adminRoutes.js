import { useEffect } from "react";
import useAuth from "./context";
import { useRouter } from "next/router";

export function AdminRoute(Component) {
  return () => {
    const { isAuthenticated, user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (
        (isAuthenticated && !loading && user.role !== "admin") ||
        (!isAuthenticated && !loading)
      ) {
        router.push("/");
      }
    }, [isAuthenticated, loading, user]);

    return <Component {...arguments} />;
  };
}
