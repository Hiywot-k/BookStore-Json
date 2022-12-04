import express from 'express'
import createTable from '../Controller/createController.js'


let createRoute = express.Router();

createRoute.get('/create',createTable)

export default createRoute;