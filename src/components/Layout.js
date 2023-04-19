import React from 'react';
import '../styles/global.scss'
import Header from "../components/Header";
import HeaderHome from "./HeaderHomeContainer";
import Footer from "./FooterContainer";
export default ({ children, isHome }) =>
    <>
        {isHome ? <HeaderHome/>: <Header/>}
        {children}
        <Footer/>
    </>