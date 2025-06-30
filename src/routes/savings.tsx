import { createFileRoute, useLocation } from "@tanstack/react-router";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";

export const Route = createFileRoute("/savings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>Ahorros</PageHeaderTitle>
      </PageHeader>
    </>
  );
}
