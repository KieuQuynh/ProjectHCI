import React, { Component } from 'react'
import Lightbox from 'react-images'

class LightBox extends Component {
  state = { currentImage: 0 }
  openLightbox = index => {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  gotoImage = index => {
    this.setState({
      currentImage: index
    })
  }

  render() {
    const { photos } = this.props

    let image = photos.map(photo => ({
      src: photo.photoLgUrl
    }))

    return (
      <div>
        <div className="row product_detail_img">
          <div className="col-2">
            {photos.map((photo, i) => {
              if (i > 0) {
                return (
                  <div
                    className="product_detail_img_small"
                    key={i}
                    onClick={() => {
                      this.openLightbox(i)
                    }}
                  >
                    <img src={photo.photoLgUrl}></img>
                  </div>
                )
              }
            })}
          </div>
          <div className="col-10">
            <div className="product_detail_img_big">
              <img
                src={photos[0].photoLgUrl}
                onClick={() => {
                  this.openLightbox(0)
                }}
              ></img>
            </div>
          </div>
        </div>
        <Lightbox
          backdropClosesModal={true}
          images={image}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          showThumbnails={true}
          showImageCount={true}
          onClick={this.openLightbox}
          onClickThumbnail={this.gotoImage}
          spinner={this.props.spinner}
        />
      </div>
    )
  }
}

export default LightBox
