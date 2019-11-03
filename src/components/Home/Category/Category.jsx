import './Category.scss'

const Category = props => {
  return (
    <div className="home_category container">
      <div className="row">
        <div className="col-4">
          <div className="home_category_img">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2019/01/product-category-img-1.jpg"></img>
          </div>
          <h6>WOMEN</h6>
        </div>
        <div className="col-4">
          <div className="home_category_img">
            {' '}
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2019/01/product-category-img-2.jpg"></img>
          </div>

          <h6>MEN</h6>
        </div>
        <div className="col-4">
          <div className="home_category_img">
            {' '}
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2019/01/product-category-img-3.jpg"></img>
          </div>

          <h6>KIDS</h6>
        </div>
      </div>
    </div>
  )
}

export default Category
