import React from 'react';
import nl2br from "react-nl2br";
import {Link} from "gatsby";
import LogoImage from "./LogoImage";

export default ({conferenceClaim, conferenceName, conferenceDate, cta}:{conferenceClaim:string, conferenceName:string, conferenceDate:string, cta: { text:string, link:string }}) => <>
    <header className={"home"}>
        <div className="container">
            <Link className={"logo"}
                to={"/"}>
                <LogoImage alt={conferenceName}/>
            </Link>
            <h1>{conferenceClaim}</h1>
            <h2>{conferenceDate}</h2>
            {cta && <a className="btn btn-secondary"
                                 href={cta.link}
                                 title={cta.text}>{nl2br(cta.text)}</a>}
        </div>
    </header>
</>