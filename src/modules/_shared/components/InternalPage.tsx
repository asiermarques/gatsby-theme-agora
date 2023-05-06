import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { useStrings } from "../../../hooks/use-strings";

export default ({ title, content }: { title: String; content: String }) => {
  const strings = useStrings();
  return (
    <Layout isHome={false}>
      <section id={"page-detail"}>
        <div className="container">
          <div className="col-12 col-sm-8 offset-sm-2">
            <p>
              <Link to={"/"} title={strings.back_to_home}>
                {strings.back_to_home}
              </Link>
            </p>
            <h1>{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
