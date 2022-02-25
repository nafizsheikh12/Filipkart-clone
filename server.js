const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config()



//component
const DefalutData = require('./default')
const Routes = require('./routes/routes')


//database
require('./db/db')

// server static assets if in production
if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'client','build',         
                      'index.html' ));    
    });
}

app.get('/',(req,res) => {
	 res.send("hellowordld")
});



//middleware
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(cors())
app.use(Routes)




DefalutData()
app.listen(port,() => {
    console.log('server is running')
})
