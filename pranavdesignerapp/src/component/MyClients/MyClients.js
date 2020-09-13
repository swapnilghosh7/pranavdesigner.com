import React from 'react';
import './MyClients.css';
import axios from 'axios';

class MyClients extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myCLientData: ''
    };
    this.myClients();
  }
  componentWillMount() { this.mounted = false; }
  componentDidMount() { this.mounted = true; }
  myClients = () => {
    let postBannerUrl = process.env.REACT_APP_BASEURL + `getMyClients`;
    // console.log(postBannerUrl);
    axios.post(postBannerUrl, { })
        .then(res => {
          let finalSectionBannerArray = res.data;
          
          if(this.mounted) {
            this.setState({'myCLientData':finalSectionBannerArray});
            console.log(this.state);
         }
          
          
        })
    };
    render() {
      return (
        <div className="myClientsWrapper">
          <div className="container">
            <div className="myClientSection">
              <div className="myClientHeadingWrapper">
                <div className="myClientStroke"></div>
                <h4 className="myClientHeading">I have been fortunate to work for</h4>
              </div>

              <div className="myClientIconWrapper">
                { this.state.myCLientData &&
                  this.state.myCLientData.map(function(data,i){
                    return(
                      <div className="myClientIconWrap">
                          <img src={process.env.REACT_APP_IMAGEURL + 'brandIcons/' + data.brand.img} alt="" className="myClientIconImg"/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default MyClients;
