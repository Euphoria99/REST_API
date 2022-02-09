const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('We are on  test page');
})

router.get('/test1', (req, res) => {
  res.send('We are in test page inside test route');
})


module.exports = router;