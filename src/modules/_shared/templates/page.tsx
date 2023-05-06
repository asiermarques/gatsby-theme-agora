import * as React from "react";
import PageHead from "../components/PageHeadContainer";
import InternalPage from "../components/InternalPage";

export default (context: any) => (
  <InternalPage
    title={context.pageContext.page.title}
    content={context.pageContext.page.content}
  />
);

export function Head(context: any) {
  return (
    <PageHead
      bodyClassName={"home"}
      title={context.pageContext.page.title}
    ></PageHead>
  );
}
