import ServiceDetails from "../ServiceDetails";
import { pmegpLoanData } from "../../../data/pmegp-loan";

const intro = {
  title: "PMEGP Loan & Subsidy Support for New Businesses",
  text: "The Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked government programme that supports eligible entrepreneurs establishing new micro-enterprises and generating employment. AarambhGrow provides structured PMEGP loan and subsidy support to help applicants assess their project, understand documentation requirements, prepare project reports and improve application readiness.",
};

export default function PMEGPLoan() {
  return (
    <ServiceDetails data={pmegpLoanData} slug="pmegp-loan" intro={intro} />
  );
}
