const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const knex = require('knex')(require('./config/index.js'));
const initRoute = require('./microServices/routes.js')


const PORT = 3000



const app = express();

app.knexConnection = knex;
app.use(cors());



app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
app.use(initRoute)



app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})