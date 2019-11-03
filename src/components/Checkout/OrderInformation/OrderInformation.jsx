import './OrderInformation.scss'
import Link from 'next/link'

const OrderInformation = props => {
  return (
    <div className="order_information container">
      <div className="order_information_title">
        <h2>YOUR ORDER</h2>
      </div>
      <div className="order_information_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <span>Chic Scarf × 1</span>
                </div>
              </td>
              <td>
                <div>
                  <span className="price">$200.00</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sub_title">
                  <span>Subtotal</span>
                </div>
              </td>
              <td>
                <div className="price">
                  <span>$200.00</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sub_title">
                  <span>Shipping</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Free shipping</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sub_title">
                  <span>Total</span>
                </div>
              </td>
              <td>
                <div className="price">
                  <span>$200.00</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order_information_submit">
        <div className="sub">
          <span>
            Your personal data will be used to process your order, support your experience throughout this website, and
            for other purposes described in our privacy policy.
          </span>
        </div>
        <Link href={{ pathname: '/Checkout/OrderReceive' }} as="/checkout/order-receive">
          <button type="button" className="btn btn-dark">
            PLACE ORDER
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrderInformation
