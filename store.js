import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import appStore from './src/reducers/index'
// import Config from './source/config'
// import graphql_middleware from './source/middlewares/graphql-middleware'
// import upload_photo_middleware from './source/middlewares/upload-photo-middleware.js'

const initState = {}
export function initializeStore(initialState = initState) {
  return createStore(appStore, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
