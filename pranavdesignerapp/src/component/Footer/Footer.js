import React from 'react';
import './Footer.css';
import axios from 'axios';

class Footer extends React.Component {
    constructor(props){
      super(props);
      this.myProfile();
      this.state = {
        'socialMedia' : ''
      }

    }

    componentDidMount() { this.mounted = true; }
      myProfile = () => {
        let postBannerUrl = process.env.REACT_APP_BASEURL + `getSocialIcons`;
        // console.log(postBannerUrl);
        axios.post(postBannerUrl, { })
            .then(res => {
              let socialMediaIcons = res.data;
              
              if(this.mounted) {
                this.setState({'socialMedia':socialMediaIcons});
                console.log(this.state);
            }
              
              
            })
        };
    render() {
      
      return (
        <footer>
          <div className="container">
            <div className="footerWrapper">
              <div className="followMeWrapper">
                <h6 className="followMeText">Follow Me On</h6>
              </div>
              <div className="socialMediaIconWrapper">
                {this.state.socialMedia && this.state.socialMedia.map((data)=>{
                  return (
                    <div className="socialMediaIcon">
                      <a href={data.social_icon_name.url}>
                        <img src={process.env.REACT_APP_IMAGEURL + 'social_icons/' + data.social_icon_name.img} alt="" className="socialMediaImg"/>
                      </a>
                    </div>
                  )
                })}
              </div>
              <div className="copyright">
                Copyright © 2020 PranavDesigner
              </div>
              
            </div>
          </div>
        </footer>
      );
    }
  }

export default Footer;
