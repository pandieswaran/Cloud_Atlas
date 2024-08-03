const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//To Create the user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }
        console.log(`Received request to register user with email: ${email}`);
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }
        user = new User({
            name,
            email,
            password
        })
        console.log(`Hashing password for user with email: ${email}`);
        user.password = await bcrypt.hash(password, 10);
        console.log(`Saving user to database with email: ${email}`);
        await user.save();
        console.log(`User registered successfully with email: ${email}`);
        return res.status(201).json({ message: "Success" });
    } catch (err) {
        console.error(`Error occurred during registration: ${err.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Login the user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Auth failed: username/password incorrect" });
        }

        const isPassMatch = await bcrypt.compare(password, user.password);
        if (!isPassMatch) {
            return res.status(403).json({ message: "Auth failed: username/password incorrect" });
        }

        const userObject = {
            email,
            name: user.name,
            _id: user._id
        };

        const jwtToken = jwt.sign(userObject, process.env.JWT_SECRET, { expiresIn: '4h' });
        userObject.jwtToken = jwtToken;

        res.status(200).json({ message: "Success", data: userObject });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get all the User
const getUser = async (req, res) => {
    try {
        const results = await User.find({});
        res.status(200).json({ data: results });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get the User by ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findById(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Success", data: result });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Update the User by ID
const updateUserById = async (req, res) => {
    console.log(req.params,"555555")
    console.log(req.params.id,"44444")
    const userId = req.params.id;
    console.log(typeof(userId))
    const { name, email, password } = req.body;
    try {
      const updateFields = {};
      if (name) updateFields.name = name;
      if (email) updateFields.email = email;
      if (password) {
        updateFields.password = await bcrypt.hash(password, 10);
      }
      updateFields.updatedAt = Date.now();
      const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
//Delete the User by ID  
const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    registerUser,
    loginUser,
    deleteById,
    updateUserById,
    getUserById,
    getUser
};
