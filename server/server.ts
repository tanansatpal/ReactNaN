import React from 'react'
import path from 'path'
import fs from 'fs'

import express, {Request, Response, NextFunction} from 'express'
import ReactDOMServer from 'react-dom/server'

import {StaticRouter} from "react-router";

import App from '../src/App'

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderer = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred')
        }
        const context = {};
        const html = ReactDOMServer.renderToString(
            <StaticRouter location = {req.url}
        context = {context} > <App / > </StaticRouter>)
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        )
    })
}

app.use('/static',express.static(path.resolve(__dirname, '..', 'build','static'), {maxAge: '30d'}))
app.use(serverRenderer)

// tell the app to use the above rules
app.use(router)

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})
