import * as React from "react";
import Layout from "../../_shared/components/Layout";
import PageHead from "../../_shared/components/PageHeadContainer";
import SpeakerSummary from "../../speaker/components/SpeakerSummary";
import useStrings from "../../_shared/hooks/use-strings";
import { Link } from "gatsby";
import { Speaker } from "../../speaker/domain/Speaker";
import TalkDetail from "../components/TalkDetail";

const strings = useStrings("es");
export default (context: any) => (
  <Layout isHome={false}>
    <section id={"talk-detail"}>
      <div className="container">
        <div className="col-12 col-sm-8 offset-sm-2">
          <p>
            <Link to={"/"} title={strings.back_to_home}>
              {strings.back_to_home}
            </Link>
          </p>
          <TalkDetail talk={context.pageContext?.talk} />
          {context.pageContext?.talk?.speakers?.map(
            (speaker: Speaker, index: number) => (
              <div key={index}>
                <SpeakerSummary
                  key={speaker.key}
                  speaker={speaker}
                  className={"speaker-in-talk"}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  </Layout>
);

export function Head(context: any) {
  return (
    <PageHead bodyClassName={""} title={context.pageContext?.talk?.title} />
  );
}
