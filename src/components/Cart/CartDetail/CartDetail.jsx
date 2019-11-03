import './CartDetail.scss'
import CartDetailItem from './CartDetailItem/CartDetailItem'
import Link from 'next/link'

const CartDetail = props => {
  return (
    <div className="cart_detail container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <CartDetailItem></CartDetailItem>
          <CartDetailItem></CartDetailItem>
          <CartDetailItem></CartDetailItem>
        </tbody>
      </table>
      <div className="total_cart">
        <div className="total_cart_title">
          <h2>CART TOTALS</h2>
        </div>
        <div className="total_cart_detail">
          <div className="total_cart_detail_item">
            <div className="title">
              <span>Subtotal</span>
            </div>
            <div className="info">
              <span className="price">$2,285.00</span>
            </div>
          </div>
          <div className="total_cart_detail_item">
            <div className="title">
              <span>Shipping</span>
            </div>
            <div className="info">
              <div className="ship_info">
                <span>Free shipping</span>
              </div>
              <div className="ship_info">
                <span>Shipping to Vietnam.</span>
              </div>
              <div className="ship_info">
                <span>Change address</span>
              </div>
            </div>
          </div>
          <div className="total_cart_detail_item">
            <div className="title">
              <span>Total</span>
            </div>
            <div className="info">
              <span className="price">$2,285.00</span>
            </div>
          </div>
          <div className="submit">
            <Link href="/Checkout/Checkout" as="/checkout">
              <button type="button" className="btn btn-dark">
                PROCESS TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetail
