const express     = require('express');
const cors        = require('cors');
const uploadImage = require('./config/multer.config');

const app = express();
app.use(cors()); // enable cors for all routes
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send({
    message : "Hi from back-end server!",
    error   : []
  });
});

app.post('/upload', uploadImage.array("files"), (req, res) => {
  res.json({
    message : "Success uploaded files",
    data    : req.files,
    error   : []
  });
});

app.listen(3000, () => console.log(`Server running!`));