import TitlePage from '../../src/components/Share/TitlePage/TitlePage'
import OrderReceiveContainer from '../../src/components/Checkout/OrderReceive/OrderReceive'

const OrderReceive = () => {
  return (
    <div className="order_receive">
      <TitlePage title="ORDER RECEIVE"></TitlePage>
      <OrderReceiveContainer></OrderReceiveContainer>
    </div>
  )
}

export default OrderReceive
