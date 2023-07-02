
import TopCardSec from "./TopCardSec";
import AccountOverviewTable from "./tables/AccountOverviewTable";
import RecentTransaction from "./tables/RecentTransaction";
import UpcomingLoanPayment from "./tables/UpcomingLoanPayment";

const DashboardHome = () => {
  const style = {
    paddingRight: "5rem",
  }

  return (
    <div>
      <TopCardSec />
      <div style={style}>
        <AccountOverviewTable />
        <UpcomingLoanPayment />
        <RecentTransaction />
      </div>
    </div>
  );
}

export default DashboardHome