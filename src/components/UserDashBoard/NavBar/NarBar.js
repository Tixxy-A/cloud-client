import { FaUserCircle, FaCaretDown, FaAlignLeft } from "react-icons/fa";
import Wrapper from "./NarBarStyles";
import { useAppContext } from "../../../context/appContext";
import { useState, useEffect } from "react";
import debounce from './Debounce';


const NavBar = () => {
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
  const [showDropDown, setShowDropDown] = useState(false);
  const { toggleSideBar, user, logoutUser } = useAppContext();
  return (
    <Wrapper style={{ top: visible ? '0' : '-60px' }}>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            
            <a href="/compare" class="bg-gray-900 text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="page">Compare</a>
            <a href="/filter" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Filter</a>
            <a href="/resource-control" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Data</a>
            <a href="/slauser" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">SLA</a>
          </div>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowDropDown((prev) => !prev);
            }}
          >
          
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={showDropDown ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
