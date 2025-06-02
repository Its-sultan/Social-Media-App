const express = require('express');
const {connect} = require('mongoose');
const cors = require('cors');
const upload = require('express-fileupload');
require('dotenv').config();


const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(upload());



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}   );

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI;
// Database connection      
connect(mongoURI, {}) 
.then(() => {
    console.log('Connected to MongoDB');
}           )
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

