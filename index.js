const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express(); 
const port = 3000; 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


app.get("/", async (req, res) => {
    res.render("index.ejs");
});
