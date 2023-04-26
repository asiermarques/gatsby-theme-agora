import React from 'react';
import {Summary} from "../domain/Summary";

export default ({summary, conferenceHashtag}:{summary:Summary, conferenceHashtag:string}) =>
        <section id="summary" className="text-center">
            <h2>
                {conferenceHashtag}
            </h2>
            <p className={"col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-12"}>{summary.description}</p>
            <p>
                <a className={"btn"} href={summary.ctaLink}>{summary.ctaText}</a>
            </p>
        </section>