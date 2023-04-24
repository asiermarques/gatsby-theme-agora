import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import SpeakerSummary from "../components/SpeakerSummary";

export default (context) =>
    <Layout>
        <section id={"speaker-detail"}>
            <div className="container">
                <div className="col-12 col-sm-8 offset-sm-2">
                    <SpeakerSummary key={context.pageContext.speaker.key} speaker={context.pageContext.speaker}/>
                </div>
            </div>
        </section>
    </Layout>

export function Head(context) {
    return <PageHead bodyClassName={"home"}
    title={context.pageContext.speaker.name}>
    </PageHead>;
}