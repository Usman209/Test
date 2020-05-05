const express = require('express');
const router = new express.Router;
const User = require('./controllers/student');
router.get('/', (req, res) => res.send('ok'));
// user routes
router.post('/student/create', User.create);

module.exports = router;