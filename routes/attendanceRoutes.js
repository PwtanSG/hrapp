const express = require('express')
const router = express.Router()
const { getAttendances, createAttendances, updateAttendances, deleteAttendances }  = require('../controllers/attendanceController')

router.get('/', getAttendances)
router.post('/', createAttendances)
router.put('/:id', updateAttendances)
router.delete('/:id', deleteAttendances)

module.exports = router