import TableView from '../components/UserDashBoard/Filter/TableView';
import Overview from "../components/ProviderDashboard/Overview/Overview";
//import NavBar from "../components/ProviderDashboard/NavBar/NarBar";
import { useAppContext } from "../context/appContext";

const IndexPage = () => {
    const {provider, user} = useAppContext();
  return(
    <>
    {user && <TableView />}
    {provider && <Overview/>}
    </>
    )
};
export default IndexPage;
