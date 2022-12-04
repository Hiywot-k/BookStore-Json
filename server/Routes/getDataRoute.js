import express from 'express';
import allData from '../Controller/getData.js'

let  AllData = express.Router();

AllData.get('/getData',allData);

export default AllData