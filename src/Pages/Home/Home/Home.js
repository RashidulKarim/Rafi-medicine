import React from 'react';
import BabysProducts from '../BabysProducts/BabysProducts';
import Banner from '../Banner/Banner';
import DiabetesProducts from '../DiabetesProducts/DiabetesProducts';
import PrescriptionProducts from '../PrescriptionProducts/PrescriptionProducts';
import ServiceBanner from '../ServiceBanner/Service-banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceBanner></ServiceBanner>
            <DiabetesProducts></DiabetesProducts>
            <PrescriptionProducts></PrescriptionProducts>
            <BabysProducts></BabysProducts>
        </div>
    );
};

export default Home;