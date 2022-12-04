import express from 'express'
import newBook from '../Controller/insertController.js'

let insertRoute = express.Router();

insertRoute.post('/insert',newBook)

export default insertRoute