const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
const Events = require('./entry-schema');

const roleModel = require('./role-model');
const userModel = require('./user-model');
const notificationModel = require('./notification-model');
const bookMarkModel = require('./bookmark-model');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: ['GET', 'POST','PUT','DELETE'], // Add other HTTP methods as needed
    allowedHeaders: ['Content-Type', 'Authorization'], // Add 'Content-Type' to allowed headers
  }));
// app.use(cors());
// const port = process.env.PORT || 56796;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
mongoose.connect("mongodb+srv://user1:user1password@cluster0.vj0tmua.mongodb.net/eventManagementDb?retryWrites=true&w=majority")   
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(() => {
        console.log('Error connecting to MongoDB');
    })

app.post('/addroles',(req)=>{
    const diaryEntry = new roleModel({"roleName":req.body.roleName});
    diaryEntry.save()
        .then((res) => {
            
            console.log("res",res);
            return res;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

module.exports = app;