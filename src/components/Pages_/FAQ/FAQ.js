import React, { Component } from 'react'
import Banner from '../../Share/TitlePageParralax/TitlePageParralax'
import '../ContactUs/contact.scss'

import Item from './Item'
class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        'WHAT IS YOUR RETURN POLICY?',
        'HOW DO I RETURN OR EXCHANGE MY ORDER?',
        'CAN I CHANGE MY ORDER?',
        'DO YOU SHIP INTERNATIONALLY?',
        'WHAT PAYMENT METHODS DO YOU ACCEPT?',
        'WHY IS MY ITEM ON BACKORDER?',
        'DO YOU OFFER PRICE ADJUSTMENTS?',
        'HOW DO I RETURN MY ITEM IF I AM AN INTERNATIONAL CUSTOMER?'
      ]
    }
  }

  render() {
    return (
      <div>
        <Banner title={'FAQ Pages'} />
        <div className="eltdf-container eltdf-default-page-template">
          <div className="eltdf-container-inner clearfix">
            <div className="eltdf-grid-row ">
              <div className="eltdf-page-content-holder eltdf-grid-col-9 eltdf-grid-col-push-3">
                <div style={{ marginTop: '96px' }}>
                  {this.state.data.map(value => (
                    <Item title={value}></Item>
                  ))}
                </div>
              </div>
              <div className="eltdf-sidebar-holder eltdf-grid-col-3 eltdf-grid-col-pull-9">
                <aside
                  className="eltdf-sidebar"
                  style={{ marginTop: '96px', background: '#f7f7f7', padding: '0px 30px' }}
                >
                  <div className="widget eltdf-separator-widget">
                    <div className="eltdf-separator-holder clearfix  eltdf-separator-center eltdf-separator-normal">
                      <div className="eltdf-separator" style={{ borderStyle: 'solid', marginTop: '25px' }} />
                    </div>
                  </div>
                  <div className="widget widget_text">
                    {' '}
                    <div className="textwidget">
                      <p>
                        <span
                          style={{
                            fontSize: '17px',
                            fontWeight: 500,
                            lineHeight: '0.012px',
                            paddingTop: '20px',
                            margin: '0px 0px 0px 0px'
                          }}
                        >
                          RELATED QUESTIONS
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="widget widget_text">
                    {' '}
                    <div className="textwidget">
                      <p className="eltdf-active-item">
                        <a
                          className="eltdf-anchor current"
                          href="https://gioia.elated-themes.com/privacy-policy-2/#privacy"
                        >
                          Your privacy?
                        </a>
                      </p>
                      <p className="eltdf-active-item">
                        <a
                          className="eltdf-anchor current"
                          href="https://gioia.elated-themes.com/privacy-policy-2/#information"
                        >
                          What information do we collect and how we use it?
                        </a>
                      </p>
                      <p className="eltdf-active-item">
                        <a
                          className="eltdf-anchor current"
                          href="https://gioia.elated-themes.com/privacy-policy-2/#sharing"
                        >
                          Sharing your personal information?
                        </a>
                      </p>
                      <p className="eltdf-active-item">
                        <a
                          className="eltdf-anchor current"
                          href="https://gioia.elated-themes.com/privacy-policy-2/#security"
                        >
                          Can I return an item for an exchange instead of a refund?
                        </a>
                      </p>
                      <p className="eltdf-active-item">
                        <a
                          className="eltdf-anchor current"
                          href="https://gioia.elated-themes.com/privacy-policy-2/#changes"
                        >
                          Policy changes
                          <br />
                        </a>
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                  <div className="widget eltdf-separator-widget">
                    <div className="eltdf-separator-holder clearfix  eltdf-separator-center eltdf-separator-normal">
                      <div className="eltdf-separator" style={{ borderStyle: 'solid' }} />
                    </div>
                  </div>
                </aside>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Faq
