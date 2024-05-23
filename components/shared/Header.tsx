import React from 'react';
import Nav from './Nav';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <>
        <TopHeader />
        <header>
            <Nav />
            main header
        </header>
        </>
    );
};

export default Header;