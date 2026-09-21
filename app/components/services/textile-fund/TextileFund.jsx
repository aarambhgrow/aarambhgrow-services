import ServiceDetails from "../ServiceDetails";
import { textileFundData } from "../../../data/textile-fund";

const intro = {
  title: "Textile Fund & Textile Industry Funding Support",
  text: "Textile businesses may require funding for machinery, technology upgrades, manufacturing expansion, working capital, modernization, production capacity and other eligible business requirements. AarambhGrow provides structured textile funding and government scheme support for eligible textile manufacturers, processing units and allied businesses.",
};

export default function TextileFund() {
  return (
    <ServiceDetails data={textileFundData} slug="textile-fund" intro={intro} />
  );
}
