import React, { Component } from 'react'
import './login.scss'
import Register from '../Register/Register'
import classnames from 'classnames'
import { closeLogin } from '../../action/index'
import { connect } from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: 1
    }
  }
  myRef = React.createRef()

  handleClick = e => {
    if (!this.myRef.current.contains(e.target)) this.props.closeLogin()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick)
  }

  toggle = value => {
    this.setState({ modal: value })
  }

  render() {
    return (
      <div className="eltdf-login-register-holder opened" style={{ display: 'block' }}>
        <div
          className="eltdf-login-register-content ui-tabs ui-widget ui-widget-content ui-corner-all"
          ref={this.myRef}
          id="login_modal"
        >
          <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
            <li
              className={classnames(
                { 'ui-state-active': this.state.modal === 1 },
                'ui-state-default ui-corner-top ui-tabs-active'
              )}
              role="tab"
              onClick={() => this.toggle(1)}
            >
              <a href="#eltdf-login-content" className="ui-tabs-anchor" role="presentation" tabIndex={-1} id="ui-id-17">
                Login
              </a>
            </li>
            <li
              className={classnames(
                { 'ui-state-active': this.state.modal === 2 },
                'ui-state-default ui-corner-top ui-tabs-active'
              )}
              role="tab"
              onClick={() => this.toggle(2)}
            >
              <a
                href="#eltdf-register-content"
                className="ui-tabs-anchor"
                role="presentation"
                tabIndex={-1}
                id="ui-id-18"
              >
                Register
              </a>
            </li>
          </ul>
          {this.state.modal === 1 ? (
            <div
              className="eltdf-login-content-inner ui-tabs-panel ui-widget-content ui-corner-bottom"
              id="eltdf-login-content"
              aria-labelledby="ui-id-17"
              role="tabpanel"
              aria-hidden="false"
              style={{ display: 'block' }}
            >
              <div className="eltdf-wp-login-holder">
                <div className="eltdf-social-login-holder">
                  <div className="eltdf-social-login-holder-inner">
                    <form method="post" className="eltdf-login-form">
                      <fieldset>
                        <div>
                          <input type="text" name="user_login_name" id="user_login_name" placeholder="username" />
                        </div>
                        <div>
                          <input
                            type="password"
                            name="user_login_password"
                            id="user_login_password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="eltdf-lost-pass-remember-holder clearfix">
                          <span className="eltdf-login-remember">
                            <input name="rememberme" defaultValue="forever" id="rememberme" type="checkbox" />
                            <label htmlFor="rememberme" className="eltdf-checbox-label">
                              Remember me
                            </label>
                          </span>
                        </div>
                        <input type="hidden" name="redirect" id="redirect" defaultValue />
                        <div className="eltdf-login-button-holder">
                          <a
                            href="https://gioia.elated-themes.com/my-account/lost-password/"
                            className="eltdf-login-action-btn"
                            data-el="#eltdf-reset-pass-content"
                            data-title="Lost Password?"
                          >
                            Lost Your password?
                          </a>
                          <button type="submit" className="eltdf-btn eltdf-btn-large eltdf-btn-solid">
                            {' '}
                            <span className="eltdf-btn-text">Login</span>{' '}
                          </button>{' '}
                          <input
                            type="hidden"
                            id="eltdf-login-security"
                            name="eltdf-login-security"
                            defaultValue="55467d399b"
                          />
                          <input type="hidden" name="_wp_http_referer" defaultValue="/faq-page/" />{' '}
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div className="eltdf-membership-response-holder clearfix" />
                </div>
              </div>
            </div>
          ) : (
            <Register />
          )}
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    closeLogin: () => {
      dispatch(closeLogin())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
