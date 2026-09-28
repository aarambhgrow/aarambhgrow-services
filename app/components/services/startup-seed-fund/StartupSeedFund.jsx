import ServiceDetails from "../ServiceDetails";
import { startupSeedFundData } from "../../../data/startup-seed-fund";

const intro = {
  title: "Startup Seed Fund for Early-Stage Businesses",
  text: "Startup seed funding can provide important financial support during the early stages of a business when founders are developing products, validating ideas, building prototypes, testing markets and preparing for commercialisation. AarambhGrow provides structured startup funding support to help eligible businesses identify suitable funding opportunities, organize required information and prepare professionally for the funding application process.",
};

export default function StartupSeedFund() {
  return (
    <ServiceDetails
      data={startupSeedFundData}
      slug="startup-seed-fund"
      intro={intro}
    />
  );
}
