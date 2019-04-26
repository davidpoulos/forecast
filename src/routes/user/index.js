const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user');


router.get('/', (req, res) => {
	res.status(200).json({ hello: 'World'});
});

router.post('/create', (req, res) => {

});



module.exports = router;