import RightSideBar from '../../src/components/Blog/RightSideBar/RightSideBar'
import TitlePage from '../../src/components/Share/TitlePage/TitlePage'
import { useRouter } from 'next/router'
import LeftSideBar from '../../src/components/Blog/LeftSideBar/LeftSideBar'
import WithoutSideBar from '../../src/components/Blog/WithoutSideBar/WithoutSideBar'
import './RightSideBar.scss'

const Blog = props => {
  const Router = useRouter()

  const showBlog = () => {
    if (Router.asPath.includes('right-side-bar')) {
      return (
        <div>
          <TitlePage title="STANDARD RIGHT SIDEBAR"></TitlePage>
          <RightSideBar></RightSideBar>
        </div>
      )
    } else if (Router.asPath.includes('left-side-bar')) {
      return (
        <div>
          <TitlePage title="STANDARD LEFT SIDEBAR"></TitlePage>
          <LeftSideBar></LeftSideBar>
        </div>
      )
    } else {
      return (
        <div>
          <TitlePage title="STANDARD WITHOUT SIDEBAR"></TitlePage>
          <WithoutSideBar></WithoutSideBar>
        </div>
      )
    }
  }

  return <div className="blog">{showBlog()}</div>
}

export default Blog
