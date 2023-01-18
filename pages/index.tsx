import Features from "../components/Features/Features";
import SiteLayout from "../components/SiteLayout/SiteLayout";

const pageDescription = "Strona artysty Paweł Kowaluk";

export default function Home() {
  return (
    <SiteLayout
      title="dom"
      description={pageDescription}
      hideHeader
      hideFooter
      background="linear-gradient(90deg, rgba(56,12,14,1) 0%, rgba(38,6,8,1) 35%, rgba(20,3,4,1) 100%)"
    >
      <Features />
    </SiteLayout>
  );
}
