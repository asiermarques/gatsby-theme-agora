import React from 'react';
import {Link} from "gatsby";
import LogoImage from "./LogoImage";

export default ({conferenceName}:{conferenceName:string}) => <>
    <header>
        <div className="container">
            <Link to={"/"} title={conferenceName} className={"logo"}>
                <LogoImage alt={conferenceName} />
            </Link>
        </div>
    </header>
</>