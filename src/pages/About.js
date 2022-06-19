import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/pfp.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  src={profile_pic}
                  alt="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Christian Hong</div>
                <div className="brief_description">
                  I'm a rising senior at San Diego State University whose interested 
                  in pursuing full stack or cloud engineering. Feel free to reach out to me 
                  on <a href="https://www.linkedin.com/in/christian-hong/">LinkedIn</a>.
                </div>
              </div>
            </div>
          </div>
        </p> 
      </div>
    )
  }
}