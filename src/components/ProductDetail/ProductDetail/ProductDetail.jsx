import './ProductDetail.scss'
import { showRating } from '../../../utils/showRating'
import LightBox from '../../Share/LightBox/LightBox'
import { useState } from 'react'
const photos = [
  { id: 1, photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-800x1024.jpg' },
  {
    id: 2,
    photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-gallery-2-600x768.jpg'
  },
  {
    id: 3,
    photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-gallery-1-600x768.jpg'
  },
  {
    id: 4,
    photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-gallery-3-600x768.jpg'
  },
  {
    id: 5,
    photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-gallery-4-600x768.jpg'
  },
  {
    id: 6,
    photoLgUrl: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-gallery-5-600x768.jpg'
  }
]

const ProductDetail = props => {
  const [amount, setAmount] = useState(1)

  const handlePlusAmount = () => {
    setAmount(amount + 1)
  }

  const handleMinusAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <div className="product_detail">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <LightBox photos={photos}></LightBox>
          </div>
          <div className="col-5">
            <div className="product_detail_des">
              <div className="product_detail_des_title">
                <h3>CHIC SCRAFT</h3>
              </div>
              <div className="product_detail_des_price">
                <span>$200.00</span>
              </div>
              <div className="product_detail_des_rank">
                <span>{showRating(4)}</span>
              </div>
              <div className="product_detail_des_info">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages.
                </span>
              </div>
              <div className="product_detail_des_amount">
                <div className="group_action">
                  <div className="action" onClick={handleMinusAmount}>
                    <i className="fal fa-minus-circle"></i>
                  </div>
                  <div className="amount">
                    <div className="amount_number">
                      <span>{amount}</span>
                    </div>
                  </div>
                  <div className="action" onClick={handlePlusAmount}>
                    <i className="fal fa-plus-circle"></i>
                  </div>
                </div>
                <button type="button" className="btn btn-dark">
                  ADD TO CART
                </button>
              </div>
              <div className="product_detail_des_like">
                <button type="button" className="btn btn-danger">
                  <div className="icon_heart">
                    <div>
                      <i className="fal fa-heart"></i>
                    </div>
                  </div>
                  <div className="title" style={{ marginLeft: '10px' }}>
                    <div style={{ paddingTop: '5px' }}>
                      <span>ADD TO WISHLIST</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="product_detail_des_category">
                <div className="product_detail_des_category_item">
                  <span className="title">SKU: </span>
                  <span className="info">01</span>
                </div>
                <div className="product_detail_des_category_item">
                  <span className="title">Category: </span>
                  <span className="info">Accessories</span>
                </div>
                <div className="product_detail_des_category_item">
                  <span className="title">Tags: </span>
                  <span className="info">New, Trendy</span>
                </div>
              </div>
              <div className="product_detail_des_hr"></div>
              <div className="product_detail_des_share">
                <div className="product_detail_des_share_info">
                  <span className="title">Share product</span>
                  <span className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
