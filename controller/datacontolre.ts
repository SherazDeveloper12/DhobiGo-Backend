import DataModel from '../model/datamodel'

const saveData = async (req, res) => {
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
}

export { saveData }