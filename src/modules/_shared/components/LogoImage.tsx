import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = ({ alt }: { alt: string }) => (
  <StaticImage
    src="../../../../static/images/logo.png"
    imgStyle={{ transition: "none", transform: "none", willChange: "inherit" }}
    alt={alt}
  />
);

export default Logo;
