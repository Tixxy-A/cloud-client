import React from "react";
import DashboardStatsGrid from "../../components/AdminDashBoard/comps/DashboardStatsGrid";
import ProviderStats from "../../components/AdminDashBoard/comps/ProvidersStats";
import ServiceStats from "../../components/AdminDashBoard/comps/ServiceStats";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      {/* <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div> */}
      <div className="flex flex-column gap-4 w-full">
        <ProviderStats />
        <ServiceStats />
      </div>
    </div>
  );
}
