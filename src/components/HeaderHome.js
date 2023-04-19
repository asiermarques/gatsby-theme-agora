import React from 'react';
import LogoImage from "./LogoImage";
import {Link} from "gatsby";

export default ({conferenceName, conferenceDate}) => <>
    <header className={"home"}>
        <div className="container">
            <Link className={"logo"}
                to={"/"}>
                <LogoImage alt={conferenceName}/>
            </Link>
            <h1>{conferenceName}</h1>
            <h2>{conferenceDate}</h2>
        </div>
    </header>
</>