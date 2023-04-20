import React from 'react';
import LogoImage from "./LogoImage";
import {Link} from "gatsby";

export default ({conferenceName, conferenceClaim, conferenceDate, cta}) => <>
    <header className={"home"}>
        <div className="container">
            <Link className={"logo"}
                to={"/"}>
                <LogoImage/>
            </Link>
            <h1>{conferenceClaim}</h1>
            <h2>{conferenceDate}</h2>
            {cta ? <a className="btn btn-primary"
                                 href={cta.link}
                                 title={cta.text}>{cta.text}</a> : ""}
        </div>
    </header>
</>