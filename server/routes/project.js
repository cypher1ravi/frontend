const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/', async (req, res) => {
    const { imageLink, link, description } = req.body;

    try {
        const newProject = new Project({
            imageLink,
            link,
            description,
        });

        await newProject.save();
        res.status(201).json({ success: true, message: 'Project added successfully' });
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
