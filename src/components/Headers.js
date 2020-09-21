import React from 'react';
import './Header.css';
import HelpIcon from '@material-ui/icons/Help';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, Button, IconButton } from '@material-ui/core';


export default function Headers(props) {
    return (
        <nav className = "headers" >    
            <div className="header__left">
                <IconButton className="header__leftIcon" variant="default"><AppsIcon /> </IconButton>
                <h3 className="header__Title"> Sticky Notes </h3> 
            </div>
            <div>
                <div  className="header__right">
                    <SettingsIcon className="header__rightIcon"/>
                    <HelpIcon className="header__rightIcon"/>
                    <Avatar className="rightAvatar">N</Avatar>
                </div>
            </div>

        </nav>
    )
}
