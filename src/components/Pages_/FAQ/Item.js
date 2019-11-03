import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: false
    }
  }
  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h6
          onClick={this.toggle}
          style={{
            margin: '0px',
            padding: '13px 50px 13px 28px',
            background: '#f4f4f4',
            borderLeft: '3px solid #e08686',
            position: 'relative'
          }}
        >
          {this.props.title}
          <i
            className={this.state.collapse ? 'fas fa-minus' : 'fas fa-plus'}
            style={{
              display: 'inline-block',
              cursor: 'pointer',
              position: 'absolute',
              right: '28px',
              top: '20px'
            }}
          ></i>
        </h6>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ border: 'none' }}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

export default Item
