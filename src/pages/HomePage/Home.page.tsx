import { authStore } from "@/features/Auth";
import { ROUTES } from "@/shared/model/routes";
import { Loader } from "@/shared/ui/Loader";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router";

export const HomePage = observer(() => {
  useLayoutEffect(() => {
    authStore.me();
  }, []);

  if (authStore.isLoading) {
    return <Loader isFullScreen />;
  }

  if (authStore.isError) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <div>Home</div>;
});

export const Component = HomePage;
