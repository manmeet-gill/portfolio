import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>San Jose State University</h3>
                <p className="info">Bachelor of Science in Software Engineering<span>•</span> <em className="date">December 2019</em></p>
                <p>
                The Bachelor of Science in Software Engineering (BSSE) program explores a wide range of course topics, 
                including software engineering principles, software specifications and software architecture. 
                Students may take on a design project during their senior year, ultimately creating a software program from the ground up.


                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Bank of the West</h3><h4>BNP Paribas</h4>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">June 2019 - August 2019</em></p>
                <p>
                Working in Commercial Bank group CBG to build/provide a comprehensive Cash Management system to large corporate clients for maximizing performance.
                • Involved in the development/enhancements of Bank’s financial software using JavaScript, Polymer Js, Walkme, Oe-Cloud and Advance business application programming tools(Finacle) in completely agile setting.
                • Managed project for data migration into post UAT/QA environment.
                • Develop Prototypes and do POCs on modern technologies, especially webpage design and development
                • Work in close proximity with the product, technology, and engineering teams.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>DisplayRide</h3>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">January 2018 - December 2018</em></p>
                <p>
                Worked with Mobile engineering team in a fast paced Agile environment, to design and develop engaging features on Android.
                Developed new features for an ever-evolving product that will make the users love the app.
                Ensured quality of code by collaborating with QA team for code reviews.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Ezing Overseas</h3>
                <p className="info">Web Application Developer <span>•</span> <em className="date">March 2014 - July 2015</em></p>
                <p>
                Worked on developing a comprehensive and interactive system for Trade, Travel and Educational consultancy
                • Analyzed customer requirements and implemented frontend software using JavaScript, Angular JS and MySQL database
                • Developed modules for storing client’s documents inhouse using Java, JS, Shell Script
                • Designed and developed new interfaces for using scanner to save client’s documents
                • Collaborated with the product management group to provide input on product designs and potential problems
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Being a curious learner, I have been able to grab many Software Development and other Technical skills.  
              Please have a look at this skills sections
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand js" /><em>JavaScript</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>PHP</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}