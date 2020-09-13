import React from 'react';
import './BannerSection.css';
import axios from 'axios';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BannerSection extends React.Component {
  // state = {};
  constructor(props){
    super(props);
    this.state = {
      banner_data: ''
    };
    this.bannerData();
  }
  componentWillMount() { this.mounted = false; }
  componentDidMount() { this.mounted = true; }

  bannerData = () => {
    let postBannerUrl = process.env.REACT_APP_BASEURL + `getBanners`;
    // console.log(postBannerUrl);
    axios.post(postBannerUrl, {page:'home' })
        .then(res => {
          // console.log(res.data);
          // let finalSingleBannerArray = res.data.filter(function(arrayData, i){
          //   return arrayData.type == "single";
          // });
          let groupArray = [];
          let finalGroupDataArray = [];
          let finalSectionBannerArray = res.data.filter(function(arrayData, i){
            if(arrayData.type == "single"){
              return arrayData;
            }
            else if(arrayData.type == "group" && !groupArray.includes(arrayData.group_name)){
              groupArray.push(arrayData.group_name);
              return arrayData;
            }
          });
          groupArray.map(function(groupArrayData){
            let finalGroupBannerArray = res.data.filter(function(groupArrayDataFinal, i){
              return groupArrayDataFinal.group_name == groupArrayData;
            });
            finalGroupDataArray[groupArrayData] = finalGroupBannerArray;
          });
          
          // let firstIndexGroup = res.data.findIndex(function(indexData){
          //   return indexData.type == "group"
          // });
          // let lastIndexGroup  = finalGroupBannerArray.length;
          // console.log(finalSectionBannerArray);
          // console.log(finalGroupDataArray);
          // console.log(groupArray);
          if(this.mounted) {
          //   console.log(finalSectionBannerArray);
          // console.log(finalGroupDataArray);
          // console.log(groupArray);
            this.setState({'banner_data':finalSectionBannerArray});
            console.log(this.state);
         }
          
          
        })
    };
    render() {
      let elements = [];
      return (
        <div className="bannerSectionContainerWrapper">
          <div className="container">
            <div className="bannerSectionWrapper">
                <div className="bannerSectionTextWrapper">
                <div className="sectionBannerImageWrapper">
                  {this.state.banner_data &&
                  this.state.banner_data.map(function(data,i){
                      return(
                        <div className="bannerSectionImageWrapper">
                        {data.type == "single" ?
                          (<div key={`bannerSectionImage_${i+1}`} className="bannerSectionImage">
                            <img className="bannerSectionImageTag" src={process.env.REACT_APP_BANNERURL + data.image_name} alt=""/>
                          </div>)
                          :
                          (<div key={`bannerSectionImage_${i+1}`} className="bannerGroupSectionImage">
                            <div className="firstSectionLeft">
                              <img className="bannerSectionImageTag" src={process.env.REACT_APP_BANNERURL + data.image_name} alt=""/>
                            </div>
                            <div className="secondSectionRight">
                            
                            </div>
                          
                          </div>)
                        }
                        </div>
                        )
                    })
                  }
                </div>
                </div>
               
            </div>
          </div>
        </div>
      );
    }
  }

export default BannerSection;
