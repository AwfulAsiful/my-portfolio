import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Menubar from '../MenuBar/Menubar';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Tech from '../Tech/Tech';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Tech></Tech>
            <Services></Services>

        </div>
    );
};

export default Home;