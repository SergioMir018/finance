import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { TabContent } from "~/components/tab-content";
import { TabTrigger } from "~/components/tab-trigger";
import { Tabs } from "~/components/tabs";
import { TabsList } from "~/components/tabs-list";

export const Route = createFileRoute("/savings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>Ahorros</PageHeaderTitle>
      </PageHeader>
      <section>
        <Tabs defaultValue="accounts">
          <TabsList className="grid grid-cols-3">
            <TabTrigger value="accounts">Cuentas</TabTrigger>
            <TabTrigger value="goals">Metas</TabTrigger>
            <TabTrigger value="movements">Moviemientos</TabTrigger>
          </TabsList>
          <TabContent value="accounts"></TabContent>
          <TabContent value="goals"></TabContent>
          <TabContent value="movements"></TabContent>
        </Tabs>
      </section>
    </>
  );
}
