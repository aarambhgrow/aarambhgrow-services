import ServiceDetails from "../ServiceDetails";
import { sisfsData } from "../../../data/sisfs";

const intro = {
  title: "Startup India Seed Fund Scheme (SISFS)",
  text: "The Startup India Seed Fund Scheme (SISFS) is designed to support eligible early-stage startups during important stages such as proof of concept, prototype development, product trials, market entry and commercialisation. AarambhGrow provides structured SISFS funding support to help startups understand the scheme, assess readiness and prepare relevant business, project and funding information.",
};

export default function SISFS() {
  return <ServiceDetails data={sisfsData} slug="sisfs" intro={intro} />;
}
