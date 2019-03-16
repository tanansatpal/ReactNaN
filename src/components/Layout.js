import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function Layout() {
  return (<div className="page-container">
    <Header/>
    <Main/>
    <Footer/>
  </div>)
}


export default Layout;
