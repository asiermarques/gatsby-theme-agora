import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";
import HomeSummary from "../components/HomeSummaryContainer";
import Location from "../components/LocationContainer";
import Speakers from "../components/SpeakersContainer";
import Agenda from "../components/AgendaContainer";

export default () =>
        <Layout isHome={true}>
            <HomeSummary/>
            <Speakers/>
            <Agenda/>
            <Location/>
        </Layout>

export function Head() {
    return <PageHead bodyClassName={"home"}/>;
}

