import { authStore } from "@/features/Auth";
import { SETUP_STEP_KEY, SETUP_STEP } from "@/features/Setup/model/items";
import { ROUTES } from "@/shared/model/routes";
import { Loader } from "@/shared/ui/Loader";
import { getItem } from "@/shared/utils/localstorage";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router";

export const HomePage = observer(() => {
  useLayoutEffect(() => {
    authStore.me();
  }, []);

  if (getItem(SETUP_STEP_KEY) !== SETUP_STEP.confirmed) {
    return <Navigate to={ROUTES.WELCOME} />;
  }

  if (authStore.isLoading) {
    return <Loader isFullScreen />;
  }

  if (authStore.isError) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <div>Home</div>;
});

export const Component = HomePage;
