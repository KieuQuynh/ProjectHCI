import './Blogs.scss'

const Blogs = props => {
  return (
    <div className="container home_blog">
      <div className="row">
        <div className="col-4 home_blog_item">
          <div className="home_blog_item_img">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-blog-list-img-1-480x480.jpg"></img>
          </div>
          <div className="home_blog_item_des">
            <h5 className="title">GIOIA NEW PICKS</h5>
            <p className="info">
              Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos ...
            </p>
            <div className="see_more">
              <span>GET THE LOOK</span>
            </div>
          </div>
        </div>
        <div className="col-4 home_blog_item">
          <div className="home_blog_item_img">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-blog-list-img-2-480x480.jpg"></img>
          </div>
          <div className="home_blog_item_des">
            <h5 className="title">SUMMER LOOK</h5>
            <p className="info">
              Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos ...
            </p>
            <div className="see_more">
              <span>GET THE LOOK</span>
            </div>
          </div>
        </div>
        <div className="col-4 home_blog_item">
          <div className="home_blog_item_img">
            <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-blog-list-img-3-480x480.jpg"></img>
          </div>
          <div className="home_blog_item_des">
            <h5 className="title">MONDAY – FRIDAY</h5>
            <p className="info">
              Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos ...
            </p>
            <div className="see_more">
              <span>GET THE LOOK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
