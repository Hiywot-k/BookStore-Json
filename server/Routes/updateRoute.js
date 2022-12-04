
import express from 'express'
import updateBook from '../Controller/updateController.js'

let updateRoute = express.Router()

updateRoute.post('/update', updateBook)

export default updateRoute