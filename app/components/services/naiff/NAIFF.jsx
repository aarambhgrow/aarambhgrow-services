import ServiceDetails from "../ServiceDetails";
import { naiffData } from "../../../data/naiff";

const intro = {
  title: "NAIFF / Agriculture Infrastructure Fund",
  text: "NAIFF, commonly used in reference to the Agriculture Infrastructure Fund (AIF), is designed to support financing for eligible agriculture infrastructure and post-harvest management projects. AarambhGrow helps eligible businesses, farmers, FPOs, agri entrepreneurs and other qualifying entities understand the financing requirements and prepare their project and financial documentation.",
};

export default function NAIFF() {
  return <ServiceDetails data={naiffData} slug="naiff" intro={intro} />;
}
