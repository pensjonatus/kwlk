import type { MetaFunction } from "@remix-run/node";
import { PageLayout } from "~/components/PageLayout";
import { RetirementManager } from "~/components/Retirement/RetirementManager";

export const meta: MetaFunction = () => {
  return [
    { title: "your retirement" },
    {
      name: "description",
      content: "Let kwlk show you a countdown until you can retire",
    },
  ];
};

export default function Retire() {
  return (
    <PageLayout title="How long until you can retire?">
      <RetirementManager />
    </PageLayout>
  );
}
