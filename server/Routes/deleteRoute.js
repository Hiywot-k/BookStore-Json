import express from 'express'
import deleteBook from '../Controller/deleteController.js'

let deleteRoute = express.Router()

deleteRoute.post('/remove', deleteBook)

export default deleteRoute