import ServiceDetails from "../ServiceDetails";
import { cgtmseData } from "../../../data/cgtmse";

const intro = {
  title: "CGTMSE Loan Support for MSMEs",
  text: "CGTMSE provides credit guarantee support to eligible lending institutions for qualifying credit facilities extended to eligible Micro and Small Enterprises. AarambhGrow provides structured CGTMSE loan preparation support, helping MSMEs assess their financing requirements, review eligibility, organize financial information, and prepare relevant documentation.",
};

export default function CGTMSE() {
  return <ServiceDetails data={cgtmseData} slug="cgtmse" intro={intro} />;
}
