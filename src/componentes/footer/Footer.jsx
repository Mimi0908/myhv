import React from "react";
import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){
    return(
        <div className="footer">
            <ul className="ulfooter">
                <li className="contactListItemFooter"><p><GitHubIcon /></p><a href="">GitHub</a></li>
                <li className="contactListItemFooter"><p><InstagramIcon /></p><a href="">Instagram</a></li>
            </ul>
        </div>
    )
}
export default Footer;