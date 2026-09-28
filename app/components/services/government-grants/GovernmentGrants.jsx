import ServiceDetails from "../ServiceDetails";
import { governmentGrantsData } from "../../../data/government-grants";

const intro = {
  title: "Government Grants for Startups & MSMEs",
  text: "Government grants and subsidy programmes can provide financial support to eligible startups, MSMEs, entrepreneurs, manufacturers, technology businesses, and businesses undertaking eligible development or expansion projects. AarambhGrow helps businesses identify suitable government funding opportunities and prepare the required business, project, and financial information.",
};

export default function GovernmentGrants() {
  return (
    <ServiceDetails
      data={governmentGrantsData}
      slug="government-grants"
      intro={intro}
    />
  );
}
