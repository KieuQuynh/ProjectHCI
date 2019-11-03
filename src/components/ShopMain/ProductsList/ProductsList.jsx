import ProductItem from '../../Share/ProductItem/ProductItem'
import { FormGroup, Input } from 'reactstrap'
import './ProductsList.scss'
import PaginationComponent from '../../Share/Pagination/Pagination'

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
  },
  {
    id: 5,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-4-600x800.jpg',
    name: 'Dresses',
    des: 'Night Dress',
    price: '100'
  },
  {
    id: 6,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-5-600x800.jpg',
    name: 'Bags',
    des: 'Simple Bag',
    price: '170'
  },
  {
    id: 7,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-7-600x800.jpg',
    name: 'Dresses',
    des: 'Night Dress',
    price: '250'
  },
  {
    id: 8,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-8-600x800.jpg',
    name: 'Bags, Men, MEN',
    des: 'Travel Bag',
    price: '70'
  },
  {
    id: 9,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-9-600x800.jpg',
    name: 'Shoes',
    des: 'Yellow Shoes',
    price: '350'
  },
  {
    id: 10,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-15-480x614.jpg',
    name: 'Dresses',
    des: 'Night Dress',
    price: '370'
  },
  {
    id: 11,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-11-600x800.jpg',
    name: 'Bags',
    des: 'Simple Bag',
    price: '750'
  },
  {
    id: 12,
    photo: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/product-img-12-600x800.jpg',
    name: 'Dresses',
    des: 'Night Dress',
    price: '70'
  }
]

const ProductsList = props => {
  return (
    <div className="products_list">
      <div className="products_list_filter">
        <div className="products_list_filter_results">
          <span>Showing 1–12 of 83 results</span>
        </div>
        <div className="products_list_filter_type">
          <div>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect" className="form-control input-lg">
                <option>Default sorting</option>
                <option>Sort by lastest</option>
                <option>Sort by populatity</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </Input>
              <i className="fal fa-chevron-down"></i>
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row">
        {productsList.map(product => {
          return (
            <div className="col-4" key={product.id}>
              <ProductItem product={product}></ProductItem>
            </div>
          )
        })}
      </div>
      <PaginationComponent></PaginationComponent>
    </div>
  )
}

export default ProductsList
