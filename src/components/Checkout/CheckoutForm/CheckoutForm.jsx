import './CheckoutForm.scss'
import { useState } from 'react'

const CheckoutForm = props => {
  const [isDifferentShip, setIsDifferentShip] = useState(false)

  const differentShip = check => {
    setIsDifferentShip(!isDifferentShip)
  }

  return (
    <div className="checkout_form container">
      <div className="row">
        <div className="col-6">
          <div className="checkout_form_label">
            <h2>BILLING DETAILS</h2>
          </div>
          <div className="form">
            <div>
              <div className="form-group">
                <label>Full name *</label>
                <input type="name" className="form-control" placeholder="Full name" />
              </div>
              <div className="form-group">
                <label>Street address *</label>
                <input type="address" className="form-control" placeholder="Street address" />
              </div>
              <div className="form-group">
                <label>Email address *</label>
                <input type="email" className="form-control" placeholder="Email address" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="phone" className="form-control" placeholder="Phone" />
              </div>
              <div className="form-group">
                <label>Town / City *</label>
                <input type="address" className="form-control" placeholder="Town / City" />
              </div>
              <div className="form-group">
                <label>Postcode / ZIP (optional)</label>
                <input type="code" className="form-control" placeholder="Postcode / ZIP " />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="checkout_form_label">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isDifferentShip}
                onChange={() => {
                  differentShip()
                }}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                SHIP TO A DIFFERENT ADDRESS?
              </label>
            </div>
          </div>
          <div className="form">
            {isDifferentShip ? (
              <div>
                <div className="form-group">
                  <label>Town / City *</label>
                  <input type="address" className="form-control" placeholder="Town / City" />
                </div>
                <div className="form-group">
                  <label>Street address *</label>
                  <input type="address" className="form-control" placeholder="Street address" />
                </div>
              </div>
            ) : null}
            <div className="form-group">
              <label>Order notes (optional)</label>
              <textarea
                rows="5"
                type="email"
                className="form-control"
                placeholder="Notes about your order, e. g. special notes for delivery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
