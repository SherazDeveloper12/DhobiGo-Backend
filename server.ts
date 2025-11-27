import { stat } from "fs"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  try {
    const data = { sample: 'data' }
    res.status(200).json({ 
      status: 'success',
      data: data,    
      message: 'Hello World!' }) 
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: 'Internal Server Error' ,
      error: error
    })
    
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
