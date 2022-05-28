import express from 'express'
import Bookrouter from './BookRoutes.js'
import AuthorRouter from './AuthorRoutes.js'

const routes = (app) => {
    //app.route('/')
    app.use(Bookrouter,
        AuthorRouter,
        express.json())

}

export default routes