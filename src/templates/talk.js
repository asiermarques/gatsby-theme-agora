import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import SpeakerSummary from "../components/SpeakerSummary";

export default (context) =>
    <Layout>
        <section id={"talk-detail"}>
            <div className="container">
                <div className="col-12 col-sm-8 offset-sm-2">
                    <h1>{context.pageContext.talk.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: context.pageContext.talk.description }}/>
                    {context.pageContext.talk.speakers.map((speaker, index) => <div key={index}>
                        <SpeakerSummary key={speaker.key} speaker={speaker} className={"speaker-in-talk"}/>
                    </div>)}
                </div>
            </div>
        </section>
    </Layout>

export function Head(context) {
    return <PageHead bodyClassName={""}
    title={context.pageContext.talk.title}>
    </PageHead>;
}