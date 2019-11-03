import FilterSide from '../FilterSide/FilterSide'
import BlogSide from '../BlogSide/BlogSide'

const LeftSideBar = props => {
  return (
    <div className="blog_right_side container">
      <div className="row">
        <div className="col-3">
          <FilterSide style={{ paddingRight: '30px' }}></FilterSide>
        </div>
        <div className="col-9">
          <BlogSide></BlogSide>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
