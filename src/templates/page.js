import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import {GatsbyImage} from "gatsby-plugin-image";

export default (context) =>
    <Layout>
        <section id={"page-detail"}>
            <div className="container">
                        <h1>{context.pageContext.page.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: context.pageContext.page.content }}/>
            </div>
        </section>
    </Layout>

export function Head(context) {
    return <PageHead bodyClassName={"home"}
    title={context.pageContext.page.title}>
    </PageHead>;
}