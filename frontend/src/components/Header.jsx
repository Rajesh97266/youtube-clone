import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "/logo.png";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="header">
      <div className="headerLeft">
        <MenuIcon />
        <Link to="/">
          <img src={Logo} alt="logo" className="headerLogo" />
        </Link>
      </div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to={`/search/${searchQuery}`}>
          <SearchIcon className="searchButton" />
        </Link>
      </div>
      <div className="headerIcons">
        <VideoCallIcon className="headerIcon" />
        <NotificationsIcon className="headerIcon" />
        <AccountCircleIcon className="headerIcon" />
      </div>
    </div>
  );
}
export default Header;
