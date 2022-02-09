import React from 'react'
import './Header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


function Header() {
    return (
        <div className='header'>
            
            <IconButton> 
                <PermIdentityIcon fontSize='large' className='header_icon'/>
            </IconButton>

            <img 
                className='header_logo' 
                src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' 
                alt=""
            />

            <IconButton>
                <ChatBubbleOutlineIcon fontSize='large' className='header_icon'/>
            </IconButton>            


        </div>
    )
}

export default Header
