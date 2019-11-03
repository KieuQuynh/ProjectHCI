import React, { Component } from 'react';
import Banner from "../../Share/TitlePageParralax/TitlePageParralax"
import "./contact.scss"
class Contact extends Component {
  render() {
    return (
      <div>
        <Banner title={"CONTACT  US"}/>
        <div className="eltdf-full-width">
          <div className="eltdf-full-width-inner">
            <div className="eltdf-grid-row">
              <div className="eltdf-page-content-holder eltdf-grid-col-12">
                <div className="eltdf-row-grid-section-wrapper "><div className="eltdf-row-grid-section"><div className="vc_row wpb_row vc_row-fluid vc_custom_1544525238864"><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12"><div className="vc_column-inner"><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <h6>Hà Nội</h6>
                    </div>
                  </div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <p>Head Office<br />
                        01 Thái Hà - Đống Đa - Hà Nội <br />
                      
                        </p>
                      <p><a href="tel:+33144943333">+33 1 44 94 33 33</a></p>
                    </div>
                  </div>
                  <div className="vc_empty_space" style={{ height: '44px' }}><span className="vc_empty_space_inner" /></div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <h6>HỒ CHÍ MINH</h6>
                    </div>
                  </div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <p>3rd floor Go Building<br />
                        Quận 7 , HCMC
                      </p>
                      <p><a href="tel:+12129571100">+1 212 957 11 00</a></p>
                     </div>
                  </div>
                  <div className="vc_empty_space" style={{ height: '50px' }}><span className="vc_empty_space_inner" /></div>
                </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-12"><div className="vc_column-inner"><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <h6>SEND US A MESSAGE</h6>
                    </div>
                  </div>
                  <div className="vc_empty_space" style={{ height: '13px' }}><span className="vc_empty_space_inner" /></div>
                  <div role="form" className="wpcf7" id="wpcf7-f323-p307-o3" lang="en-US" dir="ltr">
                    <div className="screen-reader-response" />
                    <form action="/contact-us/#wpcf7-f323-p307-o3" method="post" className="wpcf7-form cf7_custom_style_1" noValidate="novalidate">
                      <div style={{ display: 'none' }}>
                        <input type="hidden" name="_wpcf7" />
                        <input type="hidden" name="_wpcf7_version"  />
                        <input type="hidden" name="_wpcf7_locale"  />
                        <input type="hidden" name="_wpcf7_unit_tag"  />
                        <input type="hidden" name="_wpcf7_container_post" />
                      </div>
                      <div><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={4} className="wpcf7-form-control wpcf7-textarea"/></span></div>
                      <div><span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name"  size={40} className="wpcf7-form-control wpcf7-text"  placeholder="Your name here *" /></span></div>
                      <div><span className="wpcf7-form-control-wrap your-email"><input type="text" name="your-email"  size={40} className="wpcf7-form-control wpcf7-text" placeholder="E-mail address *" /></span></div>
                      <div><button type="submit" className="wpcf7-form-control wpcf7-submit eltdf-btn eltdf-btn-medium eltdf-btn-solid"><span className="eltdf-btn-text">Send</span></button><span className="ajax-loader" /></div>
                      <div className="wpcf7-response-output wpcf7-display-none" /></form></div></div></div></div></div></div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;