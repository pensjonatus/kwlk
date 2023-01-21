import Evening from "../components/Evening/Evening";
import SiteLayout from "../components/SiteLayout/SiteLayout";

export const eveningDescription = "Wieczorem jest spokojnie i cicho.";

export default function EveningPage() {
  return (
    <SiteLayout
      title="Wieczór"
      description={eveningDescription}
      hideHeader
      hideFooter
      wrapperStyle={{ backgroundColor: "black", height: "100vh" }}
    >
      <Evening />
    </SiteLayout>
  );
}
