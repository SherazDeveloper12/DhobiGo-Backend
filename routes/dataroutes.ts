import express from 'express'
const datarouter = express.Router()
import { saveData } from '../controller/datacontolre'

datarouter.post('/save', saveData)

export default datarouter