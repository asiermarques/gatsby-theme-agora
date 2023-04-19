import React from 'react';
import {graphql, StaticQuery} from "gatsby";

export default ({summary, conferenceHashtag}) =>
        <section id="summary" className="text-center">
            <h2>
                {conferenceHashtag}
            </h2>
            <p>{summary.description}</p>
            <p>
                <a className={"btn btn-outline-primary"} href={summary.ctaLink}>{summary.ctaText}</a>
            </p>
        </section>