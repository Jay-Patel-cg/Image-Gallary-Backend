const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");
const postModel = require("./model/post.model.js");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })


app.post("/creat-post" , upload.single("image"), async (req , res) => {

    console.log(req.body); 
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message : "Pist Created Succesfully",
        post
    })

});


app.get("/posts" , async (req , res) => {

    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched succesfully",
        posts
    })

});




module.exports = app