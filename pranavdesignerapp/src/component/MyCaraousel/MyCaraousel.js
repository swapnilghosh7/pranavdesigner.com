import React , { useState, useEffect } from 'react';
import './MyCaraousel.css';
import Carousel from 'react-bootstrap/Carousel';

class MyCaraousel extends React.Component {
    
    render() {
      
      return (
        <Carousel>
          {this.props.MyCaraouselData && this.props.MyCaraouselData.map(function(data,i){
            return(
            <Carousel.Item>
              <div className="carouselContentWrap">
                <div className="carouselContent">
                  <span className="quote"><img src={process.env.REACT_APP_IMAGEURL + 'Quote.svg'} alt=""/></span>
                  <div className="reviewText" dangerouslySetInnerHTML={{__html: data.my_reviews.text}}></div>
                </div>
                <div className="reviewUserNameWrap">
                    <div className="userProfileImage">
                      <img src={process.env.REACT_APP_IMAGEURL + 'user_img/' + data.my_reviews.user_img} alt=""/>
                    </div>
                    <div className="userNameDesignationWrapper">
                      <div className="userName" dangerouslySetInnerHTML={{__html: data.my_reviews.name}}></div>
                      <div className="userDesignation" dangerouslySetInnerHTML={{__html: data.my_reviews.designation}}></div>
                    </div>
                  </div>
              </div>
              
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            )
          })}
        </Carousel>
      );
    }
  }

export default MyCaraousel;
