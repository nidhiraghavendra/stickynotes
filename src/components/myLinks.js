import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../App.css';

export default function MyLinks(props) {
       
    return (
        <div>
            {/* <p> {props.sendIn} {props.sendOther} </p> */}
            <FacebookIcon className="icon" />
            <EmailIcon className="icon"/>
            <LinkedInIcon className="icon"/>
            <InstagramIcon className="icon" />
        </div>
    )
}
