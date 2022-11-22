import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Index from "../Home/Index"
import { Outlet } from 'react-router';

function Homepagelayout() {
    return (
        <>
            <Header />
            <Index />
            <Footer />
        </>
    )
}

export default Homepagelayout;