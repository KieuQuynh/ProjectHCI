import BlogSide from '../BlogSide/BlogSide'

const WithoutSideBar = props => {
  return (
    <div className="blog_right_side container">
      <div className="row">
        <div className="col-12">
          <BlogSide></BlogSide>
        </div>
      </div>
    </div>
  )
}

export default WithoutSideBar
