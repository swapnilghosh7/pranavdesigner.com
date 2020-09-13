import React from 'react';
import './IMPranav.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IMPranav extends React.Component {
    render() {
      return (
        <div className="iMPranavContainerWrapper">
          <div className="container">
            <div className="iMPranavWrapper">
                <div className="imPranavTextWrapper">
                    <h2 className="imPranavHeading">Hi, I'm Pranav</h2>
                    <div className="imPranavTextPargraphWrapper">
                      <p>A multidisciplinary Designer Working In India.<br/>
                      I Create Websites, Apps, Caraousals, Infographics, Emailers, Social Media Posts, Brand Identities And Everything In Between.</p>
                    </div>
                    
                    <div className="myWorkAt">My Work At a Glance</div>
                </div>
                <div className="imPranavImage">
                  <img className="imPranavImageTag" src={process.env.REACT_APP_IMAGEURL + 'pranav.jpg'} alt=""/>
                  <div className="imPravanImgBox"></div>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default IMPranav;
