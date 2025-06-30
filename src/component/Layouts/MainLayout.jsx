import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';




const MainLayout = () => {

  
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[80vh] ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;