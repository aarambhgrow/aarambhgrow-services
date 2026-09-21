import ServiceDetails from "../ServiceDetails";
import { pmfmeData } from "../../../data/pmfme";

const intro = {
  title: "PMFME Scheme for Micro Food Processing Businesses",
  text: "The Prime Minister Formalisation of Micro Food Processing Enterprises (PMFME) Scheme supports the formalisation and development of eligible micro food processing enterprises. AarambhGrow provides structured PMFME support covering business assessment, eligibility review, project planning, documentation, financial preparation and application readiness.",
};

export default function PMFME() {
  return <ServiceDetails data={pmfmeData} slug="pmfme" intro={intro} />;
}
