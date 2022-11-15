import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Outlet } from 'react-router';

function Homepagelayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Homepagelayout;