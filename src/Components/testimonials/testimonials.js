import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Linkedin Recommendations</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>While working together at Bank of the West, Manmeet quickly stepped into an admin role for our cash management system. 
                        He was very helpful in supporting the team with administrative configurations in managing user credentials and a myriad of complex entitlements. 
                        I enjoyed his supportive and friendly nature.
                      </p>
                      <cite>Steve Hoffman</cite>
                      <cite>Senior Product Manager</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>I have worked closely with Manmeet Singh on the Cash Management project at Bank Of The West. 
                        From the beginning, I have been impressed with his diligence and drive to take on more responsibilities. 
                        He joined the project at a stage where we were really in need of a strong developer who could keep pace with the fast and dynamic code delivery schedules. 
                        I am happy to note that Manmeet stepped up and supported the developed team in meeting with the aggressive timelines. 
                        I personally appreciate his candid insights on code delivery standards and practices. I wish him the best of luck on his future assignments.
                      </p>
                      <cite>Sharada Jaideep (MBA, CSPO)</cite>
                      <cite>Vice President, Senior Product Manager</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>Manmeet is a highly professional and skilled software developer. 
                        Working with Manmeet has been really easy as he is not only a fast learner but very knowledgeable when it comes to software development. 
                        I highly recommend Manmeet for any full stack project involving front and back end development. 
                        His vast knowledge in multiple tools make him an outstanding candidate and a great performer.
                      </p>
                      <cite>Amanpreet Kaur</cite>
                      <cite>Sr. Business Analyst</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </React.Fragment>
    );
  }
}