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

app.get("/research", async (req, res) => {
    res.render("ourresearch.ejs");
});

app.get("/guide", async (req, res) => {
  res.render("guide.ejs");
});

app.get("/community-insights", async (req, res) => {
  res.render("insights.ejs");
});

app.post("/", (req, res) => {
  res.redirect("/");
});
