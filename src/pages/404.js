import React from "react"
import Layout from "../components/Layout";
import useStrings from "../hooks/use-strings";

export default () => {
    const strings = useStrings('es');

    return <Layout
        title={strings.not_found_title + " " + title}
        description={strings.not_found_content}>

        <h1>{strings.not_found_title}</h1>
        {strings.not_found_content}
    </Layout>
}
