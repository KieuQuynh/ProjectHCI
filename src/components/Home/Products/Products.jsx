import './Products.scss'
import Slider from 'react-slick'
import Link from 'next/link'

const Products = props => {
  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className="next_button" onClick={onClick}>
        <i className="fal fa-chevron-right"></i>
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className="prev_button" onClick={onClick}>
        <i className="fal fa-chevron-left"></i>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <div className="home_products">
      <div className="container">
        <Slider {...settings}>
          <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/bags.1`}>
            <div>
              <div className="product_img">
                <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-15-480x614.jpg"></img>
                <div className="product_option">
                  <div className="product_option_icon">
                    <i className="fal fa-plus"></i>
                  </div>
                  <div className="product_option_icon">
                    <i className="fal fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_info_name">Bags</h6>
                <span className="product_info_des">
                  Simple Bag
                  <div className="hr"></div>
                </span>
                <h6 className="product_info_price">70$</h6>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/bags.1`}>
            <div>
              <div className="product_img">
                <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-13-480x614.jpg"></img>
                <div className="product_option">
                  <div className="product_option_icon">
                    <i className="fal fa-plus"></i>
                  </div>
                  <div className="product_option_icon">
                    <i className="fal fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_info_name">Clothes</h6>
                <span className="product_info_des">
                  Flowing Blouse
                  <div className="hr"></div>
                </span>
                <h6 className="product_info_price">70$</h6>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/bags.1`}>
            <div>
              <div className="product_img">
                <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-3-480x614.jpg"></img>
                <div className="product_option">
                  <div className="product_option_icon">
                    <i className="fal fa-plus"></i>
                  </div>
                  <div className="product_option_icon">
                    <i className="fal fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_info_name">Shoes</h6>
                <span className="product_info_des">
                  Black Heal
                  <div className="hr"></div>
                </span>
                <h6 className="product_info_price">70$</h6>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/bags.1`}>
            <div>
              <div className="product_img">
                <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-27-480x614.jpg"></img>
                <div className="product_option">
                  <div className="product_option_icon">
                    <i className="fal fa-plus"></i>
                  </div>
                  <div className="product_option_icon">
                    <i className="fal fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_info_name">Bestsellers</h6>
                <span className="product_info_des">
                  Winter Hat
                  <div className="hr"></div>
                </span>
                <h6 className="product_info_price">70$</h6>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/bags.1`}>
            <div>
              <div className="product_img">
                <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-480x614.jpg"></img>
                <div className="product_option">
                  <div className="product_option_icon">
                    <i className="fal fa-plus"></i>
                  </div>
                  <div className="product_option_icon">
                    <i className="fal fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_info_name">Accessories</h6>
                <span className="product_info_des">
                  Chick Scrap
                  <div className="hr"></div>
                </span>
                <h6 className="product_info_price">70$</h6>
              </div>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  )
}

export default Products
