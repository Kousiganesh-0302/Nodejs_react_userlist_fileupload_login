// // routes/users.js
// const express = require('express');
// const User = require('../Middlewares/Auth');
// const bcrypt = require('bcryptjs');
// const router = express.Router();

// // Get All Users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: 'Error fetching users' });
//     }
// });

// // Add User
// router.post('/', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ username, email, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: 'Error adding user' });
//     }
// });

// // Edit User
// router.put('/:id', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const updatedData = { email, password: await bcrypt.hash(password, 10) };
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });
//         res.json(updatedUser);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: 'Error updating user' });
//     }
// });

// // Delete User
// router.delete('/:id', async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.json({ msg: 'User deleted successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: 'Error deleting user' });
//     }
// });

// module.exports = router;

const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
});

module.exports = router;