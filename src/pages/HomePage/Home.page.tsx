import { authStore } from "@/features/Auth";
import { Loader } from "@/shared/ui/Loader";
import { useLayoutEffect } from "react";

export const HomePage = () => {
  useLayoutEffect(() => {
    authStore.me();
  }, []);

  if (authStore.isLoading) {
    return (
      <div className="home-page-loader">
        <Loader />
      </div>
    );
  }

  console.log(authStore.data);

  return <div></div>;
};

export const Component = HomePage;
