const { Router } = require('express');
const router = Router();

const { rendersigUnForm, rendersigninForm, signup, signid, logout } = require('../controllers/user.controllers')

router.get('/users/signup', rendersigUnForm)

router.post('/users/signup', signup);

router.get('/users/signin', rendersigninForm);

router.post('/users/signin', signid);

router.get('/users/logout', logout);

module.exports = router;