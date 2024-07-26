
const { addProduct, getAllProducts, updateProducts, DeleteProducts, getProductById } = require('../../controllers/productController');
const asyncHandler = require('../../utils/asyncHandler');
const router = require('express').Router();


router.post('/',asyncHandler(addProduct))
    .get('/',asyncHandler(getAllProducts))
    .put('/:id',asyncHandler(updateProducts))
    .delete('/:id',asyncHandler(DeleteProducts))
    .get('/:id',asyncHandler(getProductById))



module.exports = router