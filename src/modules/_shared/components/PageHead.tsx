import * as React from "react"

export default ({title, description, ogImage, bodyClassName}:{title:string, description:string, ogImage:string, bodyClassName:string}) => <>
    <html lang="en"/>
    <body className={bodyClassName}/>
    <title>{title}</title>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name={"description"} content={description}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={ogImage}/>
</>