import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import CTA from '../../Components/CTA/CTA';

const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Navbar/>
            <CTA/>
        </div>
    );
};

export default Home;