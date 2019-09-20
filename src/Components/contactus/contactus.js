import React, { Component } from 'react';
export default class Header extends Component {
   ContactForm = () => (
    <form method="POST">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text"  placeholder="Your Name Here"  size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" placeholder="Your Email Here" size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" placeholder="Please enter subject for your message here" size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} placeholder="Please enter your message here" rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <input name="_formsubmit_id" type="text" hidden></input>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
  )
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch <br></br>(This Form Works)</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Whether you have a question about me, my profile or you need a Software Engineer on your team, 
            Please feel free to contact me.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action="https://formspree.io/manmeetgill.sjsu@gmail.com" method="POST" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text"  placeholder="Your Name Here"  size={35} id="contactName" name="name" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" placeholder="Your Email Here" size={35} id="contactEmail" name="email" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" placeholder="Please enter subject for your message here" size={35} id="contactSubject" name="subject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} placeholder="Please enter your message here" rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <input type="submit" className="submit" value="SUBMIT"></input>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Manmeet Singh Gill<br />
                San Jose, CA, USA<br />
                <span>(669) 282-0508</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
      </React.Fragment>
    );
  }
}