import React from "react";
import Organizers from "./OrganizersContainer";
import Nav from "./Nav";

const Footer = ({ links }) => (
  <footer>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Organizers/>
          </div>
          <div className="col-md-5 text-center">
            <Nav items={links} />
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
