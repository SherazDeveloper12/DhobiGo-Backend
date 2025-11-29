const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const moongoose = require('mongoose')

app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const main = async () => {
  try {
    await moongoose.connect("mongodb+srv://devmsheraz_db_user:29Vt4jICcx768rZL@dhobigo.f5ex9f6.mongodb.net/?appName=DhobiGo")
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
  }
main()

const dataSchema = new moongoose.Schema({
  name: String,
  email: String
})
const DataModel = moongoose.model('Data', dataSchema)

app.post('/data', async (req, res) => {
  try {
    const receivedData = req.body
    const dataInstance = new DataModel(receivedData)
    await dataInstance.save()
    res.status(200).json({ 
      status: 'success',
      data: receivedData,    
      message: 'Data received successfully!' }) 
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: 'Internal Server Error' ,
      error: error
    })
  }
})

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
