var mongoose = require("mongoose"); 

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:{
      type: String,
      required: "Name"
  },
  
  price:{
    type: Number(),
    required: "Price"
  },
  
  quantity:{
    type: Number(),
    required: "Quantity"
   
  }
});

var User = mongoose.model('User', userSchema)
module.exports = User;