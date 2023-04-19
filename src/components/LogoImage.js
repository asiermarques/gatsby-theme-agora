import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default (alt) => {
    return <StaticImage
        src="../../content/images/logo.png"
        alt={alt?alt:"Logo"}
    />
}