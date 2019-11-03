import './Footer.scss'

const Footer = props => {
  return (
    <div className="footer">
      <div className="category">
        <div className="footer_category">
          <div className="footer_category_item">
            <h5>WHAT’S NEW</h5>
          </div>
          <div className="footer_category_item">
            <h5>WOMEN</h5>
          </div>
          <div className="footer_category_item">
            <h5>MEN</h5>
          </div>
          <div className="footer_category_item">
            <h5>KIDS</h5>
          </div>
          <div className="footer_category_item">
            <h5>TREND</h5>
          </div>
          <div className="footer_category_item">
            <h5>CLOTHES</h5>
          </div>
          <div className="footer_category_item">
            <h5>SHOE</h5>
          </div>
          <div className="footer_category_item">
            <h5>DRESSES</h5>
          </div>
        </div>
        <div className="contact_icon">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer_info">
        <span>© Young Pilot Technologies All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
