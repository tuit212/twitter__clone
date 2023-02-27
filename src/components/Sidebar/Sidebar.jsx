import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/Notifications'
import MessagesIcon from '@mui/icons-material/MailOutline'
import BookmarksIcon from '@mui/icons-material/BookmarkBorder'
import ListsIcon from '@mui/icons-material/ListAlt'
import ProfileIcon from '@mui/icons-material/PermIdentity'
import MoreIcon from '@mui/icons-material/MoreHoriz'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* twitter icons */}
            <TwitterIcon/>

            <SideBarOption Icon={HomeIcon} text="Home"/>
            <SideBarOption Icon={SearchIcon} text="Explore"/>
            <SideBarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SideBarOption Icon={MessagesIcon} text="Messages"/>
            <SideBarOption Icon={BookmarksIcon} text="Bookmarks"/>
            <SideBarOption Icon={ListsIcon} text="Lists"/>
            <SideBarOption Icon={ProfileIcon} text="Profile"/>
            <SideBarOption Icon={MoreIcon} text="More"/>

            {/* Button => Twitter */}
        </div>
    )
}

export default Sidebar
