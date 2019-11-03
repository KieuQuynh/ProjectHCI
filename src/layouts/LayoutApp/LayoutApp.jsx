import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Share/Header/Header'
import Logo from '../../components/Share/Logo/Logo'
import Head from 'next/head'
import './LayoutApp.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from '../../components/Share/Footer/Footer'
import Login from "../../components/Login/Login"
import 'react-input-range/lib/css/index.css'
import {closeLogin} from "../../action/index"
import {connect} from "react-redux";

const LayoutApp = props => {
 
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Head>
        <link title="GIOIA"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"></link>
        <link rel="stylesheet" href="../../../../static/font-awesome/css/all.css" />
        {process.env.NODE_ENV !== 'production' && (
          <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
        )}
      </Head>
      <Logo></Logo>
      <Header></Header>
        {props.isDisplayLogin ? <Login modal ={true} toggle={()=> props.closeLogin()}/>:""}
      {props.children}
      <Footer></Footer>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDisplayLogin: state.isDisplayLogin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeLogin: () => {
      dispatch(closeLogin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutApp)
