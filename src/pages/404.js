import React from "react"
import Layout from "../components/Layout";
import useStrings from "../hooks/use-strings";
import PageHead from "../components/PageHead";

export default () => {
    const strings = useStrings('es');

    return <Layout isHome={true}
        title={strings.not_found_title}
        description={strings.not_found_content}>

        <section id={"internal-page"}>
            <div className="container">
                <h1>{strings.not_found_title}</h1>
                {strings.not_found_content}
            </div>
        </section>
    </Layout>
}

export function Head() {
    return <PageHead bodyClassName={"home"}></PageHead>;
}
