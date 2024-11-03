const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload')
const CORS = require('cors');

const URI = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;

app.use(CORS());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles:true
}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/user', require('./Routes/useRouter'))
app.use('/api', require('./Routes/categoryRoute'))
app.use('/api',require('./Routes/upload'))
app.use('/api', require('./Routes/productRoute'))

const connectDB = async () => {
    try {
        await mongoose.connect(URI);

        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
