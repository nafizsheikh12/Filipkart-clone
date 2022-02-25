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
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
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
