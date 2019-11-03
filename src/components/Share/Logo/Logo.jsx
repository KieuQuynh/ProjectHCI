import './Logo.scss'
import Link from 'next/link'
import {connect} from "react-redux"
import {openLogin} from "../../../action/index"

const Logo = props => {
  return (
    <div className="logo container">
      <div className="logo_user">
        <div className="logo_user_login">
          <span className="logo_user_login_login" onClick = {()=> props.openLogin()}>Đăng nhập</span>/
          <span className="logo_user_login_sign_up">Đăng kí</span>
        </div>
        <i className="fal fa-user"></i>
      </div>
      <div className="logo_logo">
        <div className="logo_logo_img">
          <img
            itemProp="image"
            className="eltdf-dark-logo"
            src="https://gioia.elated-themes.com/wp-content/uploads/2018/11/logo-img-1.png"
            width={250}
            height={56}
            alt="dark logo"
          />
        </div>
      </div>
      <div className="logo_properties">
        <div className="logo_properties_search">
          <i className="fal fa-search"></i>
        </div>
        <Link href="/Cart/Cart" as="/cart">
          <div className="logo_properties_shop">
            <i className="fal fa-shopping-cart"></i>
          </div>
        </Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openLogin: () => {
      dispatch(openLogin())
    }
  }
}


export default connect(null, mapDispatchToProps)(Logo)
