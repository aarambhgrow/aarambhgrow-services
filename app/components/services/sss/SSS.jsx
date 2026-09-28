import ServiceDetails from "../ServiceDetails";
import sssData from "../../../data/sss";

const intro = {
  title: "SSS Scheme Support for Businesses",
  text: "SSS scheme support helps eligible businesses and entrepreneurs understand applicable scheme requirements, funding opportunities, documentation, and application procedures. AarambhGrow provides structured assistance to help businesses prepare their information and supporting documents for suitable scheme opportunities.",
};

export default function SSS() {
  return <ServiceDetails data={sssData} slug="sss" intro={intro} />;
}
