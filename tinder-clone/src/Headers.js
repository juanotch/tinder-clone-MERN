import React from 'react'
import  "./header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"


function headers() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" ></PersonIcon>
            </IconButton>

            <img
            className="header-logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt=""
            >
            </img>

            <IconButton>
                <ForumIcon></ForumIcon>
            </IconButton>
            
        </div>
    )
}

export default headers
