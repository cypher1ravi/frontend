const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
const uri = process.env.MONGO_URI

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../build'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});
// Registration endpoint
app.use('/api/register', require('./routes/register'))

// Login endpoint
app.use('/api/login', require('./routes/login'))

//addproject endpoint
app.use('/api/addProject', require('./routes/project'))

//addSkill endpiont
app.use('/api/addSkill', require('./routes/skill'))

//get project 
app.use('/api/getProjects', require('./routes/getApi/getProjects'))

//get Skills 
app.use('/api/getSkills', require('./routes/getApi/getSkills'))

app.get('/logout', (req, res) => {
    res.redirect('/');
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
