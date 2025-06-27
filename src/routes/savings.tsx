import { createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/savings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>{useLocation().pathname}</div>;
}
