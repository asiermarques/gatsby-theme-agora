import * as React from "react"
import Layout from "../components/Layout";
import PageHead from "../components/PageHead";
import HomeSummary from "../components/HomeSummaryContainer";

export default () =>
        <Layout isHome={true}>
            <HomeSummary/>
        </Layout>

export function Head() {
    return <PageHead bodyClassName={"home"}></PageHead>;
}

