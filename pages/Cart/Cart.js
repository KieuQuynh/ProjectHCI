import TiltePage from '../../src/components/Share/TitlePage/TitlePage'
import CartDetail from '../../src/components/Cart/CartDetail/CartDetail'

const Cart = props => {
  return (
    <div className="cart">
      <TiltePage title="CART"></TiltePage>
      <CartDetail></CartDetail>
    </div>
  )
}

export default Cart
