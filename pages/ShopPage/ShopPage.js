import TitlePage from '../../src/components/Share/TitlePage/TitlePage'
import ProductsList from '../../src/components/ShopMain/ProductsList/ProductsList'
import FilterCategory from '../../src/components/ShopMain/FilterCategory/FIlterCategory'

const ShopPage = props => {
  return (
    <div className="shop">
      <TitlePage title="SHOP"></TitlePage>
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-3">
            <FilterCategory></FilterCategory>
          </div>
          <div className="col-9">
            <ProductsList></ProductsList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
