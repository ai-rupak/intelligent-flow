import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const metadata = {
  title: "Data Engineering - CentricaSoft",
  description:
    "Lakehouse, warehouse, and streaming data infrastructure for reliable enterprise-scale intelligence.",
};

export default function DataEngineeringPage() {
  return <ServicePage content={SERVICE_CONTENT["data-engineering"]} />;
}
