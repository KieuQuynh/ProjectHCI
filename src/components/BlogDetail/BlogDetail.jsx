import FilterSide from '../Blog/FilterSide/FilterSide'
import './BlogDetail.scss'
import ProductBlogRelative from './ProductBlogRelative/ProductBlogRelative'

const BlogDetail = () => {
  return (
    <div className="blog_detail container">
      <div className="blog_detail_content blog_right_side">
        <div className="row">
          <div className="col-9">
            <div>
              <div className="blog_item" style={{ borderBottom: 'none' }}>
                <div className="blog_right_side_img">
                  <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-post-img-1.jpg"></img>
                </div>
                <div className="blog_right_side_time">
                  <i className="fal fa-edit"></i>
                  <span> Style / </span>
                  <i className="fal fa-calendar-alt"></i>
                  <span> November 15, 2018 / </span>
                  <i className="fal fa-user"></i>
                  <span> by Layla Newton</span>
                </div>
                <div className="blog_right_side_des">
                  <div className="title">
                    <h2>SUMMER BREEZE</h2>
                  </div>
                  <div className="detail">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum
                    </span>
                  </div>
                </div>
                <div className="blog_detail_img">
                  <div className="row">
                    <div className="col-6">
                      <div className="left">
                        <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-single-img-4.jpg"></img>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right">
                        <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-single-img-5.jpg"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_right_side_des">
                  <div className="detail">
                    <span>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                      consequatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.
                    </span>
                  </div>
                </div>
                <div className="blog_detail_img">
                  <div className="row">
                    <div className="col-6">
                      <div className="left">
                        <img src="https://scontent.cdninstagram.com/vp/edc3275cfe99a4bc7b5495d313777da8/5E31A751/t51.2885-15/e35/43478885_503295076824514_6537939895504187198_n.jpg?_nc_ht=scontent.cdninstagram.com"></img>
                      </div>
                      <div className="left">
                        <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-single-img-1.jpg"></img>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right">
                        <img src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-single-img-36.jpg"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_right_side_des">
                  <div className="detail">
                    <span>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                      consequatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna.
                    </span>
                  </div>
                </div>
                <div className="blog_right_side_share" style={{ textAlign: 'center' }}>
                  <span className="title">Share Now </span>
                  <span className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
            <ProductBlogRelative></ProductBlogRelative>
          </div>
          <div className="col-3">
            <FilterSide style={{ paddingLeft: '30px' }}></FilterSide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
