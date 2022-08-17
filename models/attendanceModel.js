const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date:{
        type: String,
        required: [true, 'Please add a date']
    },
    time_in:{
        type: String,
        required: [true, 'Please add a time in']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Attendance', attendanceSchema)

