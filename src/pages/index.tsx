import * as React from "react";
import Layout from "../modules/_shared/components/Layout";
import PageHead from "../modules/_shared/components/PageHeadContainer";
import HomeSummary from "../modules/_shared/components/HomeSummaryContainer";
import Location from "../modules/_shared/components/LocationContainer";
import Speakers from "../modules/speaker/components/SpeakersContainer";
import Agenda from "../modules/agenda/components/AgendaContainer";

export default () => (
  <Layout isHome={true}>
    <HomeSummary />
    <Speakers />
    <Agenda />
    <Location />
  </Layout>
);

export function Head() {
  return <PageHead bodyClassName={"home"} />;
}
