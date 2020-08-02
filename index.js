const express = require('express');
const app = express();


app.get('/:params', async (req, res) => {
  res.send({ok:req.body.params});
});



app.listen(process.env.PORT || 3001);
