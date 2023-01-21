import SiteLayout from "../components/SiteLayout/SiteLayout";
import SoapGod from "../components/SoapGod/SoapGod";

export const soapDescription = "Coś na temat mydła";

export default function SoapPage() {
  return (
    <SiteLayout title="Bóg mydła" description={soapDescription}>
      <SoapGod />
    </SiteLayout>
  );
}
