const express = require('express');
const Skill = require('../models/Skills');
const router = express.Router();



router.post('/', async (req, res) => {
    try {
        const { skillName, proficiency } = req.body;

        const newSkill = new Skill({
            skillName,
            proficiency
        });


        const savedSkill = await newSkill.save();

        res.status(201).json({ skill: savedSkill, message: 'Skill added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
