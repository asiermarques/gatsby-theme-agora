import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHead";
import HomeSummary from "../components/HomeSummaryContainer";
import LocationContainer from "../components/LocationContainer";

export default () =>
        <Layout isHome={true}>
            <HomeSummary/>
            <LocationContainer/>
        </Layout>

export function Head() {
    return <PageHead bodyClassName={"home"}></PageHead>;
}

