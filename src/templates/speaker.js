import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import {GatsbyImage} from "gatsby-plugin-image";

export default (context) =>
    <Layout>
        <section id={"speaker-detail"}>
            <div className="container">
                <div className="row">
                    <div className="image col-sm-3">
                        <GatsbyImage alt={context.pageContext.speaker.name}
                                     image={context.pageContext.speaker.image?.childImageSharp?.gatsbyImageData}/>
                    </div>
                    <div className="col-sm-9">
                        <h1>{context.pageContext.speaker.name}</h1>
                        {context.pageContext.speaker.title && <h2>{context.pageContext.speaker.title}</h2>}
                        <div dangerouslySetInnerHTML={{ __html: context.pageContext.speaker.bio }}/>
                    </div>
                </div>
            </div>
        </section>
    </Layout>

export function Head(context) {
    return <PageHead bodyClassName={"home"}
    title={context.pageContext.speaker.name}>
    </PageHead>;
}