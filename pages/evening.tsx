import Evening from "../components/Evening/Evening";
import { featureList } from "../components/Features/featureList";
import Layout from "../components/SiteLayout/SiteLayout";

export default function EveningPage() {
  const feature = featureList.find((f) => f.title === "Wieczór");
  return (
    <Layout
      title={feature.title}
      description={feature.description.toString()}
      hideHeader
      hideFooter
      wrapperStyle={{ backgroundColor: "black", height: "100vh" }}
    >
      <Evening />
    </Layout>
  );
}
