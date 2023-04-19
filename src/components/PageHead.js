import * as React from "react"

export default ({bodyClassName, title, description }) =>
        <>
            <html lang="en" />
            <body className={bodyClassName} />
            <title>{title}</title>
            <meta name={"description"} content={description}/>
        </>