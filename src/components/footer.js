import React from 'react';
import {Email, Facebook, GitHub, Instagram, Telegram, Twitter} from "@mui/icons-material";
import './footer.css'

function Footer(props) {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Facebook/>
                <Instagram/>
                <Twitter/>
                <GitHub/>
                <Telegram/>
                <Email/>
            </div>
            <p> &copy; 2023 SkoRex</p>
        </div>
    );
}

export default Footer;