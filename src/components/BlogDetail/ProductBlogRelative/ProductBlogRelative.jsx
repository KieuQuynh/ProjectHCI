import Products from '../../Home/Products/Products'
import ProductItem from '../../Share/ProductItem/ProductItem'
import { Row, Col } from 'reactstrap'
import ListIcon from '../../Share/ListIcon/ListIcon'
import { showRating } from '../../../utils/showRating'

const productBlog = [
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
  }
]

const ProductBlogRelative = props => {
  return (
    <div className="product_blog">
      <div className="product_blog_title">
        <h5>SHOP THE LOOK</h5>
        <div className="dotted"></div>
      </div>
      <div className="product_blog_list">
        <div className="row">
          {productBlog.map(product => {
            return (
              <div className="col-3" key={product.id}>
                <ProductItem product={product}></ProductItem>
              </div>
            )
          })}
        </div>
      </div>
      <div className="review">
        <div sm="12">
          <div className="review_card">
            <div className="comment">
              <div className="title">
                <h5>4 Comments</h5>
                <div className="dotted"></div>
              </div>
              <div className="comment_item">
                <div className="avatar">
                  <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/User-4-100x100.jpg"></img>
                </div>
                <div className="assess_content">
                  <div className="date">
                    <span>Sara Brock – November 29, 2018</span>
                  </div>
                  <div className="content">
                    <span>Awesome and one of my favorite winter pieces from this amazing new season collection ! </span>
                  </div>
                </div>
                <div className="rate">{showRating(5)}</div>
              </div>
              <div className="comment_item">
                <div className="avatar">
                  <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/User-3-100x100.jpg"></img>
                </div>
                <div className="assess_content">
                  <div className="date">
                    <span>Sara Brock – November 29, 2018</span>
                  </div>
                  <div className="content">
                    <span>Awesome and one of my favorite winter pieces from this amazing new season collection ! </span>
                  </div>
                </div>
                <div className="rate">{showRating(5)}</div>
              </div>
              <div className="comment_item">
                <div className="avatar">
                  <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/User-4-100x100.jpg"></img>
                </div>
                <div className="assess_content">
                  <div className="date">
                    <span>Sara Brock – November 29, 2018</span>
                  </div>
                  <div className="content">
                    <span>Awesome and one of my favorite winter pieces from this amazing new season collection ! </span>
                  </div>
                </div>
                <div className="rate">{showRating(5)}</div>
              </div>
              <div className="comment_item">
                <div className="avatar">
                  <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/User-5-100x100.jpg"></img>
                </div>
                <div className="assess_content">
                  <div className="date">
                    <span>Sara Brock – November 29, 2018</span>
                  </div>
                  <div className="content">
                    <span>Awesome and one of my favorite winter pieces from this amazing new season collection ! </span>
                  </div>
                </div>
                <div className="rate">{showRating(5)}</div>
              </div>
            </div>
            <div className="add_comment">
              <div className="add_comment_title">
                <h2>ADD A REVIEW</h2>
              </div>
              <div className="rate_comment">
                <div className="title">
                  <span>Rate this item</span>
                </div>
                <div>
                  <span>
                    <ListIcon status={[1, 2, 3, 4, 5]}></ListIcon>
                  </span>
                </div>
              </div>
              <div className="assess">
                <div className="assess_input">
                  <div className="content">
                    <textarea rows="8" placeholder="Write your comment"></textarea>
                  </div>
                  <div className="name">
                    <input placeholder="Your name here"></input>
                  </div>
                  <div className="email">
                    <input placeholder="E-mail address"></input>
                  </div>
                </div>
              </div>
              <div className="submit">
                <button type="button" className="btn btn-dark">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBlogRelative
