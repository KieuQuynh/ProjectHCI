import { connect } from 'react-redux'
import { useEffect } from 'react'
import HomeSlider from '../../src/components/Home/Slider/HomeSlider'
import Category from '../../src/components/Home/Category/Category'
import Banner from '../../src/components/Share/Banner/Banner'
import Products from '../../src/components/Home/Products/Products'
import Blogs from '../../src/components/Home/Blogs/Blogs'

const HomePage = props => {
  useEffect(() => {
    props.fetchHomeData()
  }, [])

  return (
    <div className="home_pages">
      <HomeSlider></HomeSlider>
      <Category></Category>
      <Banner
        minY={538}
        maxY={2151}
        url="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-parallax-1.jpg"
        smallTitle="Back in stock!"
        bigTitle="OUR BEST SWIM"
      ></Banner>
      <Products></Products>
      <Banner
        minY={1770}
        maxY={3386}
        url="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-parallax-img-2.jpg"
        smallTitle="Back in stock!"
        bigTitle="PRINT VIBES SHIRTS"
      ></Banner>
      <Products></Products>
      <Banner
        minY={2996}
        maxY={4618}
        url="https://gioia.elated-themes.com/wp-content/uploads/2018/11/h1-parallax-img-3.jpg"
        smallTitle="What to buy now?"
        bigTitle="NEWEST LOOKBOOKS"
      ></Banner>
      <Blogs></Blogs>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHomeData: () => {
      dispatch({ type: 'FETCH_HOME_DATA' })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage)
