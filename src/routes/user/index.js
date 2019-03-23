const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
	res.status(200).json({ hello: 'World'});
});

module.exports = router;