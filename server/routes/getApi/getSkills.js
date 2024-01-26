const express = require('express');
const router = express.Router();
const Skill = require('../../models/Skills');

router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json({ skills });
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
