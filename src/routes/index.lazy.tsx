import { createLazyFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

function Index(): ReactNode {
  return <div>Hello /!</div>;
}

export const Route = createLazyFileRoute("/")({
  component: Index,
});

