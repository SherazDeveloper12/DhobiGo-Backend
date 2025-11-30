const moongoose = require('mongoose');
const dataSchema = new moongoose.Schema({
  name: String,
  email: String
},{
  collection: 'DataCollection'
})
 const DataModel = moongoose.model('Data', dataSchema)
export default DataModel;