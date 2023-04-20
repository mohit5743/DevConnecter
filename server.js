const express = require('express');
const { ExpressValidator } = require('express-validator');
//const { JsonWebToken } = require('jsonwebtoken');
const connectDB =require('./config/db');

const app = express();
connectDB(); 
app.use(express.json({extended : false}));

app.get('/',(req,res)=> res.send("API Running"));

app.use('/api/user', require('./routers/api/users'));
app.use('/api/auth',require('./routers/api/auth'));
app.use('/api/posts',require('./routers/api/posts'));
app.use('/api/profile',require('./routers/api/profile'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log("Server started on port ${PORT}"));