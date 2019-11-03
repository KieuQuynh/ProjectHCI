import './ProductItem.scss'
import Link from 'next/link'

const ProductItem = props => {
  return (
    <Link href={{ pathname: '/ProductDetailPage/ProductDetailPage' }} as={`/product/${props.product.name}`}>
      <div className="product_item">
        <div className="product_img">
          <img src={props.product.photo}></img>
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
          <h6 className="product_info_name">{props.product.name}</h6>
          <span className="product_info_des">
            {props.product.des}
            <div className="hr"></div>
          </span>
          <h6 className="product_info_price">{props.product.price}$</h6>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
