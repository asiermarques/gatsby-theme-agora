import React from "react";
import "../../../styles/global.scss";
import Header from "./HeaderContainer";
import HeaderHome from "./HeaderHomeContainer";
import Footer from "./Footer";

export default ({ children, isHome }: { children: any; isHome: boolean }) => (
  <>
    {isHome ? <HeaderHome /> : <Header />}
    <div id="content">{children}</div>
    <Footer />
  </>
);
