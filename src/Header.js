import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications"
import {Avatar, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail-logo"
                />
            </div>
            <div className="header__middle">
                < SearchIcon />
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                
                <Avatar/> 
            </div>
        </div>
    )
}

export default Header
