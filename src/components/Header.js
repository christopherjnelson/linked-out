import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";
import "../css/Header.css";
import HeaderOption from "../components/HeaderOption";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SearchIcon from "@material-ui/icons/Search";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationIcon from "@material-ui/icons/Notifications";
import siteIcon from "../images/linkedoutsq.png";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={siteIcon} alt=""></img>
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div className="header__right"></div>
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatIcon} title="Messag" />
      <HeaderOption Icon={NotificationIcon} title="Notifications" />
      <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
    </div>
  );
}

export default Header;
