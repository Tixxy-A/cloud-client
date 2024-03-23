import { Outlet } from "react-router-dom";

import Wrapper from "./SharedLayoutStyles";
import { BigSideBar, NavBar } from "../../components/UserDashBoard/index";
import ProviderNavBar from "../../components/ProviderDashboard/NavBar/NarBar";
import { useAppContext } from "../../context/appContext";

const SharedLayout = () => {
  const { user, provider } = useAppContext();
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSideBar />
        <div>
          {user && <NavBar />}
          {provider && <ProviderNavBar />}
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
