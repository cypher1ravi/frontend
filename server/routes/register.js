const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const secretKey = 'cypher#';

router.post('/', async (req, res) => {
    const { username, password, secretKeyEntered } = req.body;

    try {
        if (secretKey !== secretKeyEntered) {
            res.status(401).json({ message: 'Unauthorized: Secret Key is incorrect' });
        } else {
            const existingUser = await User.findOne({ username });

            if (existingUser) {
                res.status(409).json({ message: 'Username already exists' });
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = new User({
                    username,
                    password: hashedPassword,
                });

                await newUser.save();

                res.status(201).json({ message: 'User registered successfully', route: 'loginPage' });
            }
        }
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
