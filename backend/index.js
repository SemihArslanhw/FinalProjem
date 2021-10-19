const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const pinRoute = require("./Routes/pins.js")
const authRoute = require("./Routes/auth.js")
const bodyParserr = require('body-parser')

dotenv.config();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 8800;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
})

const upload = multer({storage: storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded!");
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,forceServerObjectId:true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log("MongoDB connected");
}).catch((error) => console.log(error))

app.use(express.json());
app.use("/api/pins",pinRoute);
app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log("backend server is runing")
})



