import React from 'react';
import Header from '../../common/Header';
import About from '../About/index';
import Achievements from '../Achievements/index';
import Contact from '../Contact/index';
import './css/index.scss'



const HomePage = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Achievements/>
            <Contact/>
        </div>
    )
}

export default HomePage;