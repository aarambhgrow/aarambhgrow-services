import ServiceDetails from "../ServiceDetails";
import { mudraLoanData } from "../../../data/mudra-loan";

const intro = {
  title: "Mudra Loan for Small Businesses & Entrepreneurs",
  text: "Mudra Loan is a business financing option associated with the Pradhan Mantri Mudra Yojana (PMMY), designed to facilitate institutional credit for eligible micro enterprises and entrepreneurs engaged in income-generating activities. AarambhGrow provides structured Mudra Loan support to help businesses assess their funding requirements, organize documentation, prepare project information, and improve application readiness.",
};

export default function MudraLoan() {
  return (
    <ServiceDetails data={mudraLoanData} slug="mudra-loan" intro={intro} />
  );
}
