const { registerUser, loginUser, getUserById, updateUserById, deleteById, getUser } = require('../conrollers/userController');
const ensureAuthenticated = require('../auth');

const router = require('express').Router();


//Routes User using /users
router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/all', getUser)
router.get('/:id', getUserById);
router.put('/update/:id', ensureAuthenticated, updateUserById);
router.delete('/delete/:id', ensureAuthenticated, deleteById);

module.exports = router;