import React, { Component } from 'react'
import './ListIcon.scss'

class ListIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: -1,
      accepts: -1
    }
  }
  mouseLeave = () => {
    if (this.state.accepts < this.state.currentIndex) {
      this.setState({
        currentIndex: this.state.accepts
      })
    } else {
      this.setState({
        currentIndex: this.state.accepts
      })
    }
  }
  render() {
    const { status } = this.props
    let icons = status.map((_item, i) => (
      <li
        onMouseMove={() => {
          this.setState({
            currentIndex: i
          })
        }}
        onMouseLeave={this.mouseLeave}
        onClick={async () => {
          if (this.state.accepts === i) {
            await this.setState({
              accepts: -1
            })
          } else {
            await this.setState(() => {
              return {
                currentIndex: i,
                accepts: i
              }
            })
          }
        }}
        key={i}
      >
        {i <= this.state.currentIndex ? (
          <i className="fas fa-star" key={i} style={{ color: '#e08686' }}></i>
        ) : (
          <i className="fas fa-star" key={i} style={{ color: '#e0e0e0' }}></i>
        )}
      </li>
    ))

    return <ul className="my-assess-icons">{icons}</ul>
  }
}
export default ListIcon
