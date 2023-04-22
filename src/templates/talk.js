import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import {GatsbyImage} from "gatsby-plugin-image";

export default (context) =>
    <Layout>
        <section id={"talk-detail"}>
            <div className="container">
                <h1>{context.pageContext.talk.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: context.pageContext.talk.description }}/>
                {context.pageContext.talk.speakers.map(speaker => <div key={speaker.key} className="row speaker-in-talk">
                    <div className="image col-sm-2">
                        <GatsbyImage alt={speaker.name}
                                     image={speaker.image?.childImageSharp?.gatsbyImageData}/>
                    </div>
                    <div className="col-sm-10">
                        <h4>{speaker.name}</h4>
                        {speaker.title && <h5>{speaker.title}</h5>}
                        <div dangerouslySetInnerHTML={{ __html: speaker.bio }}/>
                    </div>
                </div>)}

            </div>
        </section>
    </Layout>

export function Head(context) {
    return <PageHead bodyClassName={""}
    title={context.pageContext.talk.title}>
    </PageHead>;
}