import React from "react";
import { useStrings } from "../hooks/use-strings";
import PageHead from "../modules/_shared/components/PageHeadContainer";
import InternalPage from "../modules/_shared/components/InternalPage";

export default () => {
  const strings = useStrings();
  return (
    <InternalPage
      title={strings.not_found_title}
      content={strings.not_found_content}
    />
  );
};

export function Head() {
  return <PageHead bodyClassName={"home"} />;
}
