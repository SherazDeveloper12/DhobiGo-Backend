
import express from 'express';

const cors = require('cors');
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const port = process.env.PORT 
import datarouter from './routes/dataroutes'
import { main } from './config/db'

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())



// Connect to the database
main()





// Routes
app.use('/data', datarouter)

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
