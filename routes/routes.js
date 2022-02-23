const express =  require('express')
const router = express.Router();

//component
const userController = require('../controller/user-controller')
const productController = require('../controller/product-controller')
const Product = require('../model/productSchema')

router.post('/signup', userController().index)
router.post('/login', userController().login)

router.get('/products',productController().index)
router.get('/saman/:id',async (req,res) => {    
        try{
            const products =  await Product.findOne({ 'id': req.params.id  })
           res.json(products)
           
        }catch(err){
            console.log(`getiderr ${err}`)
        }
    
})


module.exports = router