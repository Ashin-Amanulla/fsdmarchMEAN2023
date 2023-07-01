const express = require('express')
const app = express();
const PORT = 5689
const morgan = require('morgan')
const cors = require('cors')
require('./dB connection')
const api = require('./routes/note')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())
app.use('/api', api) // master routing code that redirects any front end request coming to "api" into the api file inside router




















app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
});