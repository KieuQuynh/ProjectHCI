import Swiper from 'react-id-swiper'
import './HomeSlider.scss'

const HomeSlider = props => {
  const params = {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
  }
  return (
    <div className="home_slider">
      <Swiper {...params}>
        <div className="home_slider_slide">
          <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/12/h1-slide-img-4.jpg"></img>
          <div className="home_slider_slide_intro">
            <h1>CELEBRATE THIS SUMMER</h1>
            <h1>30% OFF</h1>
            <button type="button" className="btn btn-light">
              SHOP NOW
            </button>
          </div>
        </div>
        <div>
          <img src="https://gioia.elated-themes.com/wp-content/uploads/2019/01/slide-kids.jpg"></img>
          <div className="home_slider_slide_intro">
            <h1>INIMITABLE APPAREL FOR</h1>
            <h1>EVERYONE</h1>
            <button type="button" className="btn btn-light">
              SHOP NOW
            </button>
          </div>
        </div>
        <div>
          <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-slide-img-2.jpg"></img>
          <div className="home_slider_slide_intro">
            <h1>CASUAL WEAR ESSENTIALS</h1>
            <h1>OF 2020</h1>
            <button type="button" className="btn btn-light">
              SHOP NOW
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default HomeSlider
