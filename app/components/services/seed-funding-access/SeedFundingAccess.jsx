import ServiceDetails from "../ServiceDetails";
import { seedFundingAccessData } from "../../../data/seed-funding-access";

const intro = {
  title: "Seed Funding Access for Startups in India",
  text: "Seed funding can provide important capital for early-stage startups developing products, validating business ideas, building teams, entering markets and preparing for growth. AarambhGrow provides structured seed funding support to help founders understand suitable funding opportunities, strengthen investment readiness and prepare professionally for investor outreach.",
};

export default function SeedFundingAccess() {
  return (
    <ServiceDetails
      data={seedFundingAccessData}
      slug="seed-funding-access"
      intro={intro}
    />
  );
}
