import Overview from "../../components/ProviderDashboard/Overview/Overview";
import NavBar from "../../components/ProviderDashboard/NavBar/NarBar";
import { useAppContext } from "../../context/appContext";
const OverviewPage = () => {
  const { provider } = useAppContext();
  if (!provider) return <>UnAuthorized!</>;
  return (
    <>
      {/* <NavBar /> */}
      <Overview />
    </>
  );
};

export default OverviewPage;
