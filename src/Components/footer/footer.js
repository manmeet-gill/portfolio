import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="mailto:contact@manmeetsinghgill.com"><i className="fa fa-envelope" /></a></li>
                <li><a href="https://twitter.com/ManmeetSinghGi8"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://github.com/manmeet-gill"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/manmeet-gill1/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="./assets/Resume_ManmeetGill.pdf" download><i className="fa fa-download"></i></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Manmeet Gill</li>
              <li>Design by Styleshout & CeeVee</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}