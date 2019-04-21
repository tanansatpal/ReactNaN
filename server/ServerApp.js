import React from 'react'
import { StaticRouter } from 'react-router'
import App from "../src/App"
import { Provider } from 'react-redux'

export default function ServerApp(req, context, store) {
  return (
    <Provider store={store}><StaticRouter location={req.url} context={context}> <App/> </StaticRouter></Provider>
  )
}
