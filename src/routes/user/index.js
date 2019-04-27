const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user');

router.post('/create', UserController.createUser);
router.get('/:userId', UserController.getUser)

module.exports = router;