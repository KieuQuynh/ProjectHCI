const CartDetailItem = props => {
  return (
    <tr>
      <th scope="row">
        <div className="cancel_button pt-50">
          <i className="fal fa-times"></i>
        </div>
      </th>
      <td className="product_img">
        <div className="product_info">
          <div className="product_info_img">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-600x800.jpg"></img>
          </div>
        </div>
      </td>
      <td>
        <div className="product_info">
          <div className="product_info_name">
            <div className="product_info_name_content">
              <span>Chic Scarf</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="pt-50 price">
          <span>$200.00</span>
        </div>
      </td>
      <td>
        <div className="group_action">
          <div className="action">
            <i className="fal fa-minus-circle"></i>
          </div>
          <div className="amount">
            <div className="amount_number">
              <span>1</span>
            </div>
          </div>
          <div className="action">
            <i className="fal fa-plus-circle"></i>
          </div>
        </div>
      </td>
      <td>
        <div className="pt-50 price">
          <span>$2,000.00</span>
        </div>
      </td>
    </tr>
  )
}

export default CartDetailItem
