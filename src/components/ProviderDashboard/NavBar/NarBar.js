import { FaUserCircle, FaCaretDown, FaAlignLeft } from "react-icons/fa";
import Wrapper from "./NarBarStyles";
import { useAppContext } from "../../../context/appContext";
import { useState , useEffect} from "react";
import debounce from "../../UserDashBoard/NavBar/Debounce";

const NavBar = () => {
  // const [showDropDown, setShowDropDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  const { toggleSideBar, logoutProvider } = useAppContext();
  return (
    <Wrapper style={{ top: visible ? '0' : '-50px' }}>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          {/* <button
            type="button"
            className="btn"
            onClick={() => {
              setShowDropDown((prev) => !prev);
            }}
          > */}
          <button type="button" className="btn" onClick={logoutProvider}>
            Logout
          </button>
          {/* <FaCaretDown /> */}
          {/* </button> */}
          {/* <div className={showDropDown ? "dropdown show-dropdown" : "dropdown"}>
            {/* <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Logout
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
