import React from "react"
import Layout from "../modules/_shared/components/Layout";
import useStrings from "../modules/_shared/hooks/use-strings";
import PageHead from "../modules/_shared/components/PageHeadContainer";

export default () => {
    const strings = useStrings('es');

    return <Layout isHome={true}>

        <section id={"internal-page"}>
            <div className="container">
                <h1>{strings.not_found_title}</h1>
                {strings.not_found_content}
            </div>
        </section>
    </Layout>
}

export function Head() {
    return <PageHead bodyClassName={"home"}/>;
}
