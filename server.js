const express     = require('express');
const multer      = require('multer');
const uploadImage = multer({dest: "uploads/"});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send({
    message : "Hi from back-end server!",
    error   : []
  });
});

app.post('/upload', uploadImage.array("files"), (req, res) => {
  console.log(req.body.name); // {}
  console.log(req.files);
  res.json({
    message: "Success uploaded files"
  });
});

app.listen(3000, () => console.log(`Server running!`));