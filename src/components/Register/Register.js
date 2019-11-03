import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div
        className="eltdf-register-content-inner ui-tabs-panel ui-widget-content ui-corner-bottom"
        id="eltdf-register-content"
        aria-labelledby="ui-id-18"
        role="tabpanel"
        aria-hidden="false"
        style={{ display: 'block' }}
      >
        <div className="eltdf-wp-register-holder">
          <div className="eltdf-social-register-holder">
            <form method="post" className="eltdf-register-form">
              <fieldset>
                <div>
                  <input type="text" name="user_register_name" id="user_register_name" placeholder="User Name" />
                </div>
                <div>
                  <input type="email" name="user_register_email" id="user_register_email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="password"
                    name="user_register_password"
                    id="user_register_password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="user_register_confirm_password"
                    id="user_register_confirm_password"
                    placeholder="Repeat Password"
                  />
                </div>
                <div className="eltdf-register-button-holder">
                  <button type="submit" className="eltdf-btn eltdf-btn-large eltdf-btn-solid">
                    {' '}
                    <span className="eltdf-btn-text">Register</span>{' '}
                  </button>
                </div>
              </fieldset>
            </form>
            <div className="eltdf-membership-response-holder clearfix" />
          </div>
        </div>
      </div>
    )
  }
}

export default Register
