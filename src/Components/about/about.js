import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>A dedicated Software Engineer with diversified experience in developing enterprise software.
              Excels in defining development strategy, measuring quality, technical writing, and delivering high-quality products. 
              Proficient with Java, Python, JavaScript, SQL and expert level of proficiency with Microsoft Office and Full Stack Development. 
              Skilled with an analytical mind & entrepreneurial spirit with exceptional organizational skills, outstanding technical & written communication skills, as well as the ability to multitask in a dynamic(Agile) environment.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Manmeet Gill</span><br />
                  <span>
                    San Jose, CA, USA
                  </span><br />
                  <span>(669)282-0508</span><br />
                  <span>manmeetgill.sjsu@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="./assets/Resume_ManmeetGill.pdf" download className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}