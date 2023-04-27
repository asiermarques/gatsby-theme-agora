import * as React from "react";
import Layout from "../components/Layout";
import PageHead from "../components/PageHeadContainer";

export default (context: any) => (
  <Layout isHome={false}>
    <section id={"page-detail"}>
      <div className="container">
        <h1>{context.pageContext.page.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: context.pageContext.page.content }}
        />
      </div>
    </section>
  </Layout>
);

export function Head(context: any) {
  return (
    <PageHead
      bodyClassName={"home"}
      title={context.pageContext.page.title}
    ></PageHead>
  );
}
