const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('2, next middleware')
    res.send('<h1>Hi</h1>');
});

module.exports = router;