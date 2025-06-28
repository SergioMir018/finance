import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "~/components/page-header";

export const Route = createFileRoute("/transactions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>Transacciones</PageHeader>
    </>
  );
}
