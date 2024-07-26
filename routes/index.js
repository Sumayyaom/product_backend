const router = require('express').Router();
const productRoutes = require('./products/productRouter.js');
//const userRoutes = require('./users/userRouter.js');

router.use('/products',productRoutes)
//router.use('/users',userRoutes)

module.exports = router