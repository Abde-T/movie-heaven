import React, { useEffect, useState } from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function Home() {
    return (
        <>
            <Nav/>
            <Featured titelSearch="fast" title="Fast And Furious"/>
            <Footer/>
        </>
    );
}

export default Home;