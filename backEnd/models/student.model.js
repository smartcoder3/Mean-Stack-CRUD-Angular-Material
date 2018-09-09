const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name:  {
        type: String
    },
      regNo:{
        type: Number
    },
      dob: {
        type: Date
    },
      class:{
        type: String
    } 
});

var Student = mongoose.model('Student', StudentSchema);
module.exports =  {Student: Student}

// title: {
//     type: String
// },
// responsible: {
//     type: String
// },
// description: {
//     type: String
// },
// severity: {
//     type: String
// },
// status: {
//     type: String,
//     default: 'Open'
// }