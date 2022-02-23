const product = require('./constant/product')
const Products = require('./model/productSchema')

const DefalutData = async () => {
   try {
     await Products.deleteMany({})
     await Products.insertMany(product)
   }catch(err){
       console.log(err)
   }
}

module.exports = DefalutData;