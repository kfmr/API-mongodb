import express from 'express'
import Bookrouter from './BookRoutes.js'

const routes = (app) => {
    //app.route('/')
    app.use(Bookrouter,
        express.json())

}

export default routes