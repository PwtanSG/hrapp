const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema({
    date:{
        type: String,
        required: [true, 'Please add a date']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Attendance', attendanceSchema)

