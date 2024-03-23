import links from "./links";
import providerLinks from "../../ProviderDashboard/NavBar/providerLinks";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../../context/appContext";

const NavLinks = ({ toggleSideBar }) => {
  const { user, provider } = useAppContext();

  return (
    <div className="nav-links">
      {user &&
        links.map((link) => {
          const { text, id, path } = link;

          return (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              key={id}
            >
              {text}
            </NavLink>
          );
        })}
      {provider &&
        providerLinks.map((link) => {
          const { text, id, path } = link;

          return (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              key={id}
            >
              {text}
            </NavLink>
          );
        })}
    </div>
  );
};
export default NavLinks;
