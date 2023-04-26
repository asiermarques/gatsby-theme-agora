import React from "react";
import Organizers from "../../organizer/components/OrganizersContainer";
import Nav from "../../link/components/Nav";
import {Link} from "../../link/domain/Link";

export default ({ links }:{links:Link[]}) =>
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
  </footer>;