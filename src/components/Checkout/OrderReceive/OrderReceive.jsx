import './OrderReceive.scss'

const OrderReceiveContainer = props => {
  return (
    <div className="order_content container ">
      <div className="thank">
        <span>Thank you. Your order has been received.</span>
      </div>
      <div className="order_common">
        <div className="order_common_item">
          <span className="title">Order number: </span>
          <span className="info">6082</span>
        </div>
        <div className="order_common_item">
          <span className="title">Date: </span>
          <span className="info">September 22, 2019</span>
        </div>
        <div className="order_common_item">
          <span className="title">Total: </span>
          <span className="info">$200.00</span>
        </div>
        <div className="order_common_item">
          <span className="title">Payment method: </span>
          <span className="info">Direct bank transfer</span>
        </div>
      </div>
      <div className="order_detail">
        <div className="title">
          <h2>ORDER DETAILS</h2>
        </div>
        <div className="detail">
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
                    <span>Payment method</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>Direct bank transfer</span>
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
      </div>
    </div>
  )
}

export default OrderReceiveContainer
