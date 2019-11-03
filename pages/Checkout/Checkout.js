import TitlePage from '../../src/components/Share/TitlePage/TitlePage'
import CheckoutForm from '../../src/components/Checkout/CheckoutForm/CheckoutForm'
import OrderInformation from '../../src/components/Checkout/OrderInformation/OrderInformation'

const Checkout = props => {
  return (
    <div className="checkout">
      <TitlePage title="CHECKOUT"></TitlePage>
      <CheckoutForm></CheckoutForm>
      <OrderInformation></OrderInformation>
    </div>
  )
}

export default Checkout
