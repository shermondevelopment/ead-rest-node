const express = require('express');
const app = express();


app.get('/', async (req, res) => {
  res.send({ok:'seja bem Vindo'});
});



app.listen(process.env.PORT || 3001);
