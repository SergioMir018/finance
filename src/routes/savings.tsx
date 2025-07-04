import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { TabContent } from "~/components/tab-content";
import { TabTrigger } from "~/components/tab-trigger";
import { Tabs } from "~/components/tabs";
import { TabsList } from "~/components/tabs-list";
import { Card, CardHeader } from "~/components/ui/card";

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
        <Tabs defaultValue="accounts" className="gap-2">
          <TabsList className="grid grid-cols-3">
            <TabTrigger value="accounts">Cuentas</TabTrigger>
            <TabTrigger value="goals">Metas</TabTrigger>
            <TabTrigger value="movements">Moviemientos</TabTrigger>
          </TabsList>
          <TabContent value="accounts" className="grid grid-cols-2 gap-2">
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
          <TabContent value="goals">
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
          <TabContent value="movements">
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
        </Tabs>
      </section>
    </>
  );
}
