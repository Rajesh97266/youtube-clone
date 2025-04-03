import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../public/logo.png";
import { useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="header">
      <div className="headerLeft">
        <MenuIcon />
        <img src={Logo} alt="logo" className="headerLogo" />
      </div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <SearchIcon />
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
