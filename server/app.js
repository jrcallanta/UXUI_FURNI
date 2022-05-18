const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;


app.use(express.static(path.resolve(__dirname, '../client/build/')));
app.use(bodyParser.urlencoded({extended: true}));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
})


app.listen(process.env.PORT || port, (res, req) => {
  console.log('Successfully listening')
});
