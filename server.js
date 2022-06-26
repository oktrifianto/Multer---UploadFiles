const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send({
    message : "Hi from back-end server!",
    error   : []
  });
});

app.post('/upload', (req, res) => {
  console.log(req.body); // {}
});

app.listen(3000, () => console.log(`Server running!`));