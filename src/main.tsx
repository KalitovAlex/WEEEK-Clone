import "@/shared/styles/globals.scss";
import "./shared/i18n";
import "./shared/configs/mobx";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
