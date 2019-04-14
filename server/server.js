import React from 'react'
import path from 'path'
import fs from 'fs'

import express from 'express'
import {renderToString} from 'react-dom/server'
import {ChunkExtractor} from '@loadable/server'
import {StaticRouter} from "react-router";

import App from '../src/App'

// TODO
//  add `new LoadablePlugin()` to webpack config plugins array and then build to generate this file.
//  Find a solution that works without ejecting the react app
const statsFile = path.resolve('./build/loadable-stats.json');

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderer = (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred')
    }
    const extractor = new ChunkExtractor({statsFile});
    const context = {};
    const jsx = extractor.collectChunks(<StaticRouter location={req.url} context={context}> <App/> </StaticRouter>)
    const html = renderToString(jsx);
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
    )
  })
};

app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static'), {maxAge: '30d'}));
app.use(serverRenderer);

// tell the app to use the above rules
app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
});
