import Features from "../components/Features/Features";
import SiteLayout from "../components/SiteLayout/SiteLayout";

const pageDescription = "Strona artysty Paweł Kowaluk";

export default function Home() {
  return (
    <SiteLayout title="dom" description={pageDescription} hideHeader hideFooter>
      <Features />
    </SiteLayout>
  );
}
