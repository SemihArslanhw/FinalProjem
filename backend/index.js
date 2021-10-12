const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const pinRoute = require("./Routes/pins.js")
const authRoute = require("./Routes/auth.js")

dotenv.config();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 8800;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log("MongoDB connected");
}).catch((error) => console.log(error))

app.use(express.json());
app.use("/api/pins/",pinRoute);
app.use("/api/auth/",authRoute);

app.listen(PORT,()=>{
    console.log("backend server is runing")
})



