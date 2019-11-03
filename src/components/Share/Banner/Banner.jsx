import './Banner.scss'
import React, { Component } from 'react'

class Banner extends Component {
  state = {
    postionY: -310,
    prevScrollY: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleChangePosition)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', () => {})
  }

  handleChangePosition = async () => {
    const currentScrollY = document.documentElement.scrollTop
    if (currentScrollY > this.props.minY && currentScrollY < this.props.maxY) {
      await this.setState({
        postionY: -310 + (currentScrollY - this.props.minY) / 3
      })
    }
    await this.setState({
      prevScrollY: currentScrollY
    })
  }

  render() {
    return (
      <div
        className="home_banner"
        style={{
          backgroundPosition: `50% ${this.state.postionY}px`,
          backgroundImage: `url(${this.props.url})`
        }}
      >
        <div className="home_banner_title">
          <h5>{this.props.smallTitle}</h5>
          <h1>{this.props.bigTitle}</h1>
        </div>
      </div>
    )
  }
}

export default Banner
