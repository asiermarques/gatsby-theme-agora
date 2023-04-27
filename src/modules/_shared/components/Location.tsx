import * as React from "react";

export default ({
  iframeLink,
  address,
}: {
  iframeLink: string;
  address: string;
}) => (
  <section className="location">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-6 map">
          <iframe
            src={iframeLink}
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
          {address}
        </div>
      </div>
    </div>
  </section>
);
