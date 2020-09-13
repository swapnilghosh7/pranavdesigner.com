import React from 'react';
import './HomePage.css';
import IMPranav from '../IMPranav/IMPranav.js';
import BannerSection from '../BannerSection/BannerSection.js';
import MyClients from '../MyClients/MyClients.js';
import MyComments from '../MyComments/MyComments.js';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomePage extends React.Component {
    render() {
      return (
        <div className="homePageWrapper">
            <IMPranav />
            <BannerSection />
            <MyClients />
            <MyComments />
        </div>
      );
    }
  }

export default HomePage;
