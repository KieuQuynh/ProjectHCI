import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import LayoutApp from '../src/layouts/LayoutApp/LayoutApp'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
