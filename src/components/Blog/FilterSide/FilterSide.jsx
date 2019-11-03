const FilterSide = props => {
  return (
    <div className="right_filter" style={props.style}>
      <div className="right_filter_content">
        <div className="products">
          <div className="image">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/12/blog-banner-1.jpg"></img>
          </div>
          <div className="image">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/12/blog-banner-2.jpg"></img>
          </div>
        </div>
        <div className="filter_category">
          <div className="filter_category_title">
            <h6>CATEGORIES</h6>
          </div>
          <div className="filter_category_item">Accessories</div>
          <div className="filter_category_item">Creative</div>
          <div className="filter_category_item">Designers</div>
          <div className="filter_category_item">Fashion & Trends</div>
          <div className="filter_category_item">Inspiration</div>
          <div className="filter_category_item">Style</div>
          <div className="filter_category_item">Summer Goals</div>
        </div>
        <div className="latest_post">
          <h6>LASTEST POST</h6>
          <div className="info">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-post-img-6-150x150.jpg"></img>
            <div className="des">
              <div className="cate">
                <span>Style</span>
              </div>
              <div className="name">
                <span>WORLD TRAVELER</span>
              </div>
            </div>
          </div>
          <div className="info">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h7-blog-post-img-8-150x150.jpg"></img>
            <div className="des">
              <div className="cate">
                <span>Style</span>
              </div>
              <div className="name">
                <span>ULTIMATE DESIGN</span>
              </div>
            </div>
          </div>
          <div className="info">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-post-img-1-150x150.jpg"></img>
            <div className="des">
              <div className="cate">
                <span>Style</span>
              </div>
              <div className="name">
                <span>SUMMER BREEZE</span>
              </div>
            </div>
          </div>
          <div className="info">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h7-blog-post-img-7-150x150.jpg"></img>
            <div className="des">
              <div className="cate">
                <span>Style</span>
              </div>
              <div className="name">
                <span>PURE & ELEGANT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tag">
          <h6>TAG</h6>
          <div className="tag_info">
            <span>
              Accessories Bags Beauty Brands Clothing Designers Editorials Fashion Jewelry Lifestyle Men Shoes Summer
              Trends Women
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSide
