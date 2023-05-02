import React from 'react';
import Header from '../Pages/Home/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;