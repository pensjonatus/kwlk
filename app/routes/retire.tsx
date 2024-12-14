import type { MetaFunction } from "@remix-run/node";
import { PageLayout } from "~/components/PageLayout";
import { RetirementCountdown } from "~/components/RetirementCountdown";

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
  return <PageLayout title="How long until you can retire?">
    <RetirementCountdown />
  </PageLayout>;
}
