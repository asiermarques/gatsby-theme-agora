import * as React from "react"
import Layout from "../../_shared/components/Layout";
import PageHead from "../../_shared/components/PageHeadContainer";
import SpeakerSummary from "../components/SpeakerSummary";
import {Speaker} from "../domain/Speaker";

export default (context:any) =>
    <Layout isHome={false}>
        <section id={"speaker-detail"}>
            <div className="container">
                <div className="col-12 col-sm-8 offset-sm-2">
                    <SpeakerSummary speaker={context.pageContext.speaker as Speaker}/>
                </div>
            </div>
        </section>
    </Layout>

export function Head(context:any) {
    return <PageHead bodyClassName={"home"} title={context.pageContext.speaker.name}/>;
}