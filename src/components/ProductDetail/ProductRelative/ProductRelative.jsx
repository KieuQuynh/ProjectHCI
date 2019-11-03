import './ProductRelative.scss'
import ProductItem from '../../Share/ProductItem/ProductItem'

const productsList = [
  {
    id: 1,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-15-480x614.jpg',
    name: 'Bags',
    des: 'Simple Bag',
    price: '70'
  },
  {
    id: 2,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-2-600x800.jpg',
    name: 'Clothes',
    des: 'Brown Cat',
    price: '50'
  },
  {
    id: 3,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-1-600x800.jpg',
    name: 'Shoes',
    des: 'Yellow Shoes',
    price: '10'
  },
  {
    id: 4,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-3-600x800.jpg',
    name: 'Bags, Men, MEN',
    des: 'Travel Bag',
    price: '700'
  }
]

const ProductRelative = props => {
  return (
    <div className="product_relative">
      <div className="container">
        <div className="product_relative_title">
          <h2>RELATED PRODUCTS</h2>
        </div>
        <div className="product_relative_products">
          <div className="row">
            {productsList.map(product => {
              return (
                <div className="col-3" key={product.id}>
                  <ProductItem product={product}></ProductItem>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductRelative
