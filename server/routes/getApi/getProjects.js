const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
