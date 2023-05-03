import * as React from "react";
import { Location } from "../domain/Location";
import nl2br from "react-nl2br";

export default ({ location }: { location: Location }) => (
  <section className="location">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-6 map">
          <iframe
            src={location.mapIframeUrl}
            width={"100%"}
            height={"450"}
            style={{ border: 0, display: "block" }}
            allowFullScreen={false}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
          />
        </div>
        <div className="col-lg-4 col-md-6 address">
          <h4>Venue</h4>
          {nl2br(location.venueInformation)}
        </div>
      </div>
    </div>
  </section>
);
