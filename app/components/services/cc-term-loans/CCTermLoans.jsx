import ServiceDetails from "../ServiceDetails";
import { ccTermLoansData } from "../../../data/cc-term-loans";

const intro = {
  title: "CC & Term Loans for Business Finance",
  text: "Cash Credit (CC) and Term Loans are common business finance facilities used by eligible businesses for working capital, expansion, machinery, equipment, infrastructure, and other business requirements. AarambhGrow provides structured loan preparation support to help businesses assess their funding requirements, organize financial information, prepare project documentation, and improve overall loan application readiness.",
};

export default function CCTermLoans() {
  return (
    <ServiceDetails data={ccTermLoansData} slug="cc-term-loans" intro={intro} />
  );
}
