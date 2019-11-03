import './ProductDescription.scss'
import { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import { showRating } from '../../../utils/showRating'
import ListIcon from '../../Share/ListIcon/ListIcon'

const ProductDescription = props => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <div className="product_description container">
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1')
              }}
            >
              DESCRIPTION
              <div className="hr"></div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2')
              }}
            >
              ADDITIONAL INFORMATION
              <div className="hr"></div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggle('3')
              }}
            >
              REVIEWS (1)
              <div className="hr"></div>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="des">
              <Col sm="12">
                <p>
                  Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                  vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt aucta.
                  Aliquam lorem ante.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="info">
              <Col sm="12">
                <div className="info_item">
                  <div className="title">
                    <span>Weight</span>
                  </div>
                  <div className="detail">
                    <span>0.2 kg</span>
                  </div>
                </div>
                <div className="info_item">
                  <div className="title">
                    <span>Dimensions</span>
                  </div>
                  <div className="detail">
                    <span>120 x 30 x 1 cm</span>
                  </div>
                </div>
                <div className="info_item">
                  <div className="title">
                    <span>Sizes</span>
                  </div>
                  <div className="detail">
                    <span>One Size</span>
                  </div>
                </div>
                <div className="info_item">
                  <div className="title">
                    <span>Composition</span>
                  </div>
                  <div className="detail">
                    <span>Cotton</span>
                  </div>
                </div>
                <div className="info_item">
                  <div className="title">
                    <span>Free shipping</span>
                  </div>
                  <div className="detail">
                    <span>For orders over 50 USD</span>
                  </div>
                </div>
                <div className="info_item">
                  <div className="title">
                    <span>ColorPicker</span>
                  </div>
                  <div className="detail">
                    <span>Beige, Blue, Red, White</span>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="review">
              <Col sm="12">
                <div className="review_card">
                  <div className="comment">
                    <div className="title">
                      <h2>1 REVIEW FOR CHIC SCARF</h2>
                    </div>
                    <div className="comment_item">
                      <div className="avatar">
                        <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/User-4-100x100.jpg"></img>
                      </div>
                      <div className="assess_content">
                        <div className="date">
                          <span>Sara Brock – November 29, 2018</span>
                        </div>
                        <div className="content">
                          <span>
                            Awesome and one of my favorite winter pieces from this amazing new season collection !{' '}
                          </span>
                        </div>
                      </div>
                      <div className="rate">{showRating(5)}</div>
                    </div>
                  </div>
                  <div className="add_comment">
                    <div className="add_comment_title">
                      <h2>ADD A REVIEW</h2>
                    </div>
                    <div className="rate_comment">
                      <div className="title">
                        <span>Rate this item</span>
                      </div>
                      <div>
                        <span>
                          <ListIcon status={[1, 2, 3, 4, 5]}></ListIcon>
                        </span>
                      </div>
                    </div>
                    <div className="assess">
                      <div className="assess_input">
                        <div className="content">
                          <textarea rows="8" placeholder="Write your comment"></textarea>
                        </div>
                        <div className="name">
                          <input placeholder="Your name here"></input>
                        </div>
                        <div className="email">
                          <input placeholder="E-mail address"></input>
                        </div>
                      </div>
                    </div>
                    <div className="submit">
                      <button type="button" className="btn btn-dark">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}

export default ProductDescription
