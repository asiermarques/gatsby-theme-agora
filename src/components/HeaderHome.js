import React from 'react';
import LogoImage from "./LogoImage";
import {Link} from "gatsby";

export default ({conferenceName, conferenceClaim, conferenceDate}) => <>
    <header className={"home"}>
        <div className="container">
            <Link className={"logo"}
                to={"/"}>
                <LogoImage alt={conferenceName}/>
            </Link>
            <h1>{conferenceClaim}</h1>
            <h2>{conferenceDate}</h2>
        </div>
    </header>
</>