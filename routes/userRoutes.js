const { registerUser, loginUser, getUserById, updateUserById, deleteById } = require('../conrollers/userController');
const ensureAuthenticated = require('../auth');

const router = require('express').Router();

// /users/register
router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/:id', getUserById);
router.put('/update/:id', ensureAuthenticated, updateUserById);
router.delete('/delete/:id', ensureAuthenticated, deleteById);

module.exports = router;