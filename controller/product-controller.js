const Product = require('../model/productSchema')

const productController = () => {
   return {
       async index (req,res) {
           try {
              const products = await Product.find({})
              res.json(products)
           }catch(err) {
               console.log(err)
           }
       },

   }
}

module.exports = productController