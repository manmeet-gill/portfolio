import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
       <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
              <h2>RightPrice</h2>
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="not found" src='images/portfolio/rightprice.jpeg' />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>RightPrice</h5>
                        <p>An AI based price estimator</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
              <h2>GeneTree</h2>
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/genetree.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>GeneTree</h5>
                        <p>A family tree application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
              <h2>Spartan Connections</h2>
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/spartanconnections.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Spartan Connections</h5>
                        <p>Student-Mentor Portal</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
              <h2>Twitter-who-posted</h2>
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/twitter-who-posted.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Twitter-who-posted</h5>
                        <p>NLP project</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
              <h2>Graduate Admissions Predictor</h2>
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/graduation-predictor.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Graduate Admissions Predictor</h5>
                        <p>ML based admission chance predictor</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-rightprice.jpeg" alt="" />
            <div className="description-box">
              <h4>RightPrice</h4>
              <p>As my Capstone project, developed an application that can project price of used mobile phones based on their value from internet using other ad postings on online public marketplaces.
                Implemented machine learning tools to predict the value of an object by providing description attributes like make, model, color, memory etc.</p>
              <span className="categories"><i className="fa fa-tag" />Tech Stack: Python, BeautifulSoup, Scikit-learn, Firebase, React JS</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/manmeet-gill/AI_based_price_estimator"><h3 class="fa fa-github" aria-hidden="true"/>
 Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-genetree.jpg" alt="" />
            <div className="description-box">
              <h4>GeneTree</h4>
              <p>Launched a web application that can build genetic family trees using the user provided information.
                • Fully functional app helps to store large amounts of family data including facts like date of birth, gender, parents’ information and so on.
                • This could be a great idea for a startup. Can be used to predict possibility of genetic diseases using machine learning.</p>
              <span className="categories"><i className="fa fa-tag" />Tech Stack: ReactJS, HTML5, CSS3, Google API for Firebase, FireStore</span>
            </div>
            <div className="link-box">
            <a href="https://github.com/GeneTreeTeam/genetree"><h3 class="fa fa-github" aria-hidden="true"/>
 Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-spartanconnections.jpg" alt="" />
            <div className="description-box">
              <h4>Spartan Connections</h4>
              <p>Built a student portal in a team using Agile methodologies designing ReactJS based Web App which help Students in mentoring/advising by creating connections/links with their senior students & Alumni of the university.
                • Implemented Dynamically Rendered Web pages to enhance UI/UX.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
            <a href="https://github.com/manmeet-gill/spartanconnections"><h3 class="fa fa-github" aria-hidden="true"/> Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-twitter-who-posted.jpg" alt="" />
            <div className="description-box">
              <h4>Twitter-who-posted</h4>
              <p>Developed a machine learning project to identity the original owner of the post. This application analyses the tweets from the users to identify other posts form them. Used tdifvectorizer to find ngrams and vectorize the data.
                • Advanced the application to mine both persons’ tweets and creates a tweet wireframe.</p>
              <span className="categories"><i className="fa fa-tag" />Tech Stack: Python, Sklearn, Twitter Api Package, Textacy(NLP)</span>
            </div>
            <div className="link-box">
            <a href="https://github.com/manmeet-gill/Twitter_who_posted"><h3 class="fa fa-github" aria-hidden="true"/> Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-graduation-predictor.jpg" alt="" />
            <div className="description-box">
              <h4>Graduate Admissions Predictor</h4>
              <p>Designed a machine learning model for predicting the chances that a student will get admission in a certain graduate school given his scores like GRE scores, TOEFL scores etc.
                • Improved the model using algorithms like logistic regression and decision trees
                • Represented Statistical Analysis and results using visually appealing Pictographs, High Charts, and Fusion Charts using R</p>
              <span className="categories"><i className="fa fa-tag" />Tech Stack: Python, Scikit learn, Pandas, R</span>
            </div>
            <div className="link-box">
            <a href="https://github.com/manpreetsjsu/Predict_Graduate_Admissions"><h3 class="fa fa-github" aria-hidden="true"/> Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}