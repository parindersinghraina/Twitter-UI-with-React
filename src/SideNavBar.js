import React from "react"
import './SideNavBar.css'
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import HomeIcon from "@material-ui/icons/HomeOutlined"
import ExploreIcon from "@material-ui/icons/ExploreOutlined"
import NotificationIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PernIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { Button } from "@material-ui/core";
import SideNavOption from "./SideNavOption"

function SideNavBar() {
    return(
        <div className="sidenavbar">
            <BubbleChartIcon className="icon"/>
            <SideNavOption active text="Home" Icon={HomeIcon}/>
            <SideNavOption text="Explore" Icon={ExploreIcon}/>
            <SideNavOption text="Notifications" Icon={NotificationIcon}/>
            <SideNavOption text="Messages" Icon={MailOutlineIcon}/>
            <SideNavOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SideNavOption text="Lists" Icon={ListAltIcon}/>
            <SideNavOption text="Profile" Icon={PernIdentityIcon}/>
            <SideNavOption text="More" Icon={MoreHorizIcon}/>
            <Button className="gotswits" fullWidth>Tswits</Button>
        </div>
    )
}

export default SideNavBar;