import React from "react";
import nl2br from "react-nl2br";
import { Link } from "gatsby";
import LogoImage from "./LogoImage";
import { TicketsCTA } from "../domain/Cta";

export default ({
  conferenceClaim,
  conferenceName,
  conferenceDate,
  cta,
}: {
  conferenceClaim: string;
  conferenceName: string;
  conferenceDate: string;
  cta: TicketsCTA;
}) => (
  <>
    <header className={"home"}>
      <div className="container">
        <Link className={"logo"} to={"/"}>
          <LogoImage />
        </Link>
        <h1>{conferenceClaim}</h1>
        <h2>{conferenceDate}</h2>
        {cta && (
          <a className="btn btn-secondary" href={cta.link} title={cta.text}>
            {nl2br(cta.text)}
          </a>
        )}
      </div>
    </header>
  </>
);
