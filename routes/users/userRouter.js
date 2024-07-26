const router = require('express');
const asyncHandler = require('../../utils/asyncHandler');

//CRUD
router.post('/signup',asyncHandler(SignUp))

module.exports = router