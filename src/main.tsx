import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./shared/styles/index.css";
import { appRouter } from "./routes/Router";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
