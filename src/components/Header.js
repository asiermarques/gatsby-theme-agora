import React from 'react';
import {Link} from "gatsby";
import LogoImage from "./LogoImage";

export default ({conferenceName}) => <>
    <header>
        <div className="container">
            <Link to={"/"} title={conferenceName} className={"logo"}>
                <LogoImage/>
            </Link>
        </div>
    </header>
</>