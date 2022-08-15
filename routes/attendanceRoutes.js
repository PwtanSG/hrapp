const express = require('express')
const router = express.Router()
const { getAttendances, createAttendances, updateAttendances, deleteAttendances }  = require('../controllers/attendanceController')
const { protect } = require('../middleware/authMiddleware')

router.get('/' ,protect, getAttendances)
router.post('/',protect, createAttendances)
router.put('/:id', protect,updateAttendances)
router.delete('/:id', protect, deleteAttendances)

module.exports = router