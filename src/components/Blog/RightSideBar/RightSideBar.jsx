import FilterSide from '../FilterSide/FilterSide'
import BlogSide from '../BlogSide/BlogSide'

const RightSideBar = props => {
  return (
    <div className="blog_right_side container">
      <div className="row">
        <div className="col-9">
          <BlogSide></BlogSide>
        </div>
        <div className="col-3">
          <FilterSide style={{ paddingLeft: '30px' }}></FilterSide>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
