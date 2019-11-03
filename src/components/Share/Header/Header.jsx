import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import './Header.scss'
import classnames from 'classnames'
import Link from 'next/link'

const Header = props => {
  const [state, setState] = useState({ isOpen: false, active_nav: '' })

  const [isFixed, setIsFixed] = useState(false)

  const router = useRouter()

  const mount = useRef(null)

  const toggle = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    })
  }

  useEffect(() => {
    mount.current = true
    if (
      router.asPath.includes('shop') ||
      router.asPath.includes('product') ||
      router.asPath.includes('cart') ||
      router.asPath.includes('checkout')
    ) {
      setState({
        ...state,
        active_nav: 3
      })
    } else if (router.asPath.includes('page')) {
      setState({
        ...state,
        active_nav: 2
      })
    } else if (router.asPath.includes('blog')) {
      setState({
        ...state,
        active_nav: 4
      })
    } else if (router.asPath.includes('about')) {
      setState({
        ...state,
        active_nav: 5
      })
    } else
      setState({
        ...state,
        active_nav: 1
      })
    document.addEventListener('scroll', () => {
      if (mount.current) {
        if (document.documentElement.scrollTop >= 95) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      }
    })
    return document.removeEventListener('scroll', () => {
      mount.current = false
    })
  }, [router.asPath])

  return (
    <div className={classnames({ isFixed: isFixed })}>
      <Navbar expand="md" className="header">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto mr-auto" navbar style={{marginTop:"0px"}}>
            <NavItem className="header_nav">
              <Link href="/HomePage/HomePage" as="/">
                <NavLink className={classnames({ active_nav: state.active_nav === 1 }, 'header_item')}>HOME</NavLink>
              </Link>
            </NavItem>
            <NavItem className="header_nav">
              <NavLink className={classnames({ active_nav: state.active_nav === 2 }, 'header_item')}>PAGES</NavLink>
              <div className="drop_nav drop_nav_pages">
                <div className="drop_nav_item">
                  <span>
                    Guest Editors
                    <div className="hr "></div>
                  </span>
                </div>
                <div className="drop_nav_item">
                  <span>
                    Our Team <div className="hr "></div>
                  </span>
                </div>
                <div className="drop_nav_item">
                  <span>
                    About Me <div className="hr "></div>
                  </span>
                </div>
                <div className="drop_nav_item">
                  <Link href={{pathname:"/FAQ/FAQ"}} as={'/pages/faq'}>
                  <span>
                   FAQ Pages <div className="hr "></div>
                  </span>
                  </Link>
                </div>
                <div className="drop_nav_item">
                  <Link href={{pathname:"/PrivacyPage/PrivacyPage"}} as = {'/pages/privacy'}>
                    <span>
                      Privacy Policy <div className="hr "></div>
                    </span>
                  </Link>
                  
                </div>
                <div className="drop_nav_item">
                  <Link href={{pathname:'/VideoPage/VideoPage'}} as={'/pages/video-pages'}>
                    <span>
                      Video Page <div className="hr "></div>
                    </span>
                  </Link>
                  
                </div>
                <div className="drop_nav_item">
                  <Link href={{pathname:"/StoreLocation/StoreLocation"}} as={'/pages/store-location'}>
                  <span>
                    Store Location <div className="hr "></div>
                  </span>
                  </Link>
                </div>
                <div className="drop_nav_item">
                  <Link href={{pathname:'/Contact/Contact'}} as={'/pages/contact-us'}>
                    <span>
                      Contact Us <div className="hr "></div>
                    </span>
                  </Link>
                  
                </div>
              </div>
            </NavItem>
            <NavItem className="header_nav">
              <NavLink className={classnames({ active_nav: state.active_nav === 3 }, 'header_item')}>SHOP</NavLink>
              <div className="drop_nav drop_nav_shop">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <div className="nav_shop_header">
                        <span>Product Types</span>
                      </div>
                      <div className="nav_shop_body">
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/StandardProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item ">
                            <span>
                              Standard Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/GroupedProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item ">
                            <span>
                              Grouped Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/VariableProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Variable Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/ExternalProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              External Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/VirtualProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Virtual Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/DownloadableProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Downloadable Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/BigImagesProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Big Images Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/Showcase-Vertical.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Showcase-Vertical <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={{ pathname: '/ProductDetailPage/ProductDetailPage' }}
                          as={`/product/OnSaleProduct.1`}
                        >
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              On Sale Product <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="nav_shop_header">
                        <span>Shop Types</span>
                      </div>
                      <div className="nav_shop_body">
                        <Link href="/ShopPage/ShopPage" as="/shop">
                          <div className="nav_shop_body_name drop_nav_item">
                            <span>
                              Shop Main <div className="hr "></div>
                            </span>
                          </div>
                        </Link>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Downloadable Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Big Images Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Showcase-Vertical <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            On Sale Product <div className="hr "></div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="nav_shop_header">
                        <span>Shop Layout</span>
                      </div>
                      <div className="nav_shop_body">
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Variable Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            External Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Virtual Product <div className="hr "></div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="nav_shop_header">
                        <span>Shop Page</span>
                      </div>
                      <div className="nav_shop_body">
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Downloadable Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Big Images Product <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            Showcase-Vertical <div className="hr "></div>
                          </span>
                        </div>
                        <div className="nav_shop_body_name drop_nav_item">
                          <span>
                            On Sale Product <div className="hr "></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem className="header_nav">
              <NavLink className={classnames({ active_nav: state.active_nav === 4 }, 'header_item')}>BLOG</NavLink>
              <div className="drop_nav drop_nav_blog">
                <Link
                  href={{ pathname: '/Blog/Blog', query: { blogType: 'right_side_bar' } }}
                  as="/blog/right-side-bar"
                >
                  <div className="drop_nav_item">
                    <span>
                      Right sidebar
                      <div className="hr "></div>
                    </span>
                  </div>
                </Link>
                <Link href={{ pathname: '/Blog/Blog', query: { blogType: 'left_side_bar' } }} as="/blog/left-side-bar">
                  <div className="drop_nav_item">
                    <span>
                      Left sidebar <div className="hr "></div>
                    </span>
                  </div>
                </Link>
                <Link
                  href={{ pathname: '/Blog/Blog', query: { blogType: 'without_side_bar' } }}
                  as="/blog/without-side-bar"
                >
                  <div className="drop_nav_item">
                    <span>
                      No sidebar <div className="hr "></div>
                    </span>
                  </div>
                </Link>
              </div>
            </NavItem>
            <NavItem className="header_nav">
              <Link href={{ pathname: '/About/AboutPage' }} as="/about">
                <NavLink className={classnames({ active_nav: state.active_nav === 5 }, 'header_item')}>ABOUT</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
