const User = require('../model/userSchema')


const userController = () => {
    return {
        async index (req,res) {
            try {
              const exist= await User.findOne({username: req.body.username});
               if(exist) {
                   return res.status(401).json('Username already exist')
               }
              const user = req.body;
              const newUser = new User(user)
              await newUser.save();

              res.status(200).json('userupload')
            }catch(err){
                console.log(err)
            }
        },


        async login (req,res) {
            try{
                let user = await User.findOne({username: req.body.username, password: req.body.password});
                if(user){
                    return res.status(200).json(`${req.body.username} login successful`)
                }else{
                    return res.status(401).json('invalid login')
                }
            }catch(err){
                console.log(err)
            }
        }
    }
}

module.exports = userController