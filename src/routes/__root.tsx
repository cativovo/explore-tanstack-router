import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactNode } from "react";
import "@/index.css";

export const Route = createRootRoute({
  component: Root,
});

function Root(): ReactNode {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
