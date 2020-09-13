import React from 'react';
import './MyComments.css';
import axios from 'axios';
import MyCaraousel from '../MyCaraousel/MyCaraousel.js'

class MyComments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myReviewsData: ''
    };
    this.myComments();
  }
  componentWillMount() { this.mounted = false; }
  componentDidMount() { this.mounted = true; }
  myComments = () => {
    let postBannerUrl = process.env.REACT_APP_BASEURL + `getMyReviews`;
    // console.log(postBannerUrl);
    axios.post(postBannerUrl, { })
        .then(res => {
          let finalReviewArray = res.data;
          
          if(this.mounted) {
            this.setState({'myReviewsData':finalReviewArray});
            console.log(this.state);
         }
          
          
        })
    };
    render() {
      return (
        <div className="myCommentsWrapper">
          <div className="container">
            <div className="myCommentsSection">
              

              <div className="myCommentsIconWrapper">
                <MyCaraousel MyCaraouselData={this.state.myReviewsData} />
                {/* { this.state.myReviewsData &&
                  this.state.myReviewsData.map(function(data,i){
                    return(
                      <div className="myCommentsSectionWrap">
                        <div className="myCommentsHeadingWrapper">
                          <div className="myCommentstroke"></div>
                          <h4 className="myCommentsHeading">I have been fortunate to work for</h4>
                        </div>
                        <div className="myCommentsIconWrap">
                            <img src={process.env.REACT_APP_IMAGEURL + 'brandIcons/' + data.brand.img} alt="" className="myClientIconImg"/>
                        </div>
                      </div>
                    )
                  })
                } */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default MyComments;
