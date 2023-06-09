import React from "react";
import Organizers from "../../organizer/components/OrganizersContainer";
import Nav from "../../link/components/NavContainer";
import FooterNotes from "./FooterNotesContainer";

export default () => (
  <footer>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Organizers />
          </div>
          <div className="col-md-5 text-center">
            <Nav />
          </div>
        </div>
        <FooterNotes />
      </div>
    </section>
  </footer>
);
