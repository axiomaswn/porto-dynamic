var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataujianSchema = new Schema({
  letter    : String,
  frequency : Boolean,
},{
  timestamps: true
});

module.exports = mongoose.model('dataujian', dataujianSchema);
