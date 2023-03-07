// installed express nodemon openai dotenv
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ credentials: true, origin: process.env.CORS }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/openai', require('./routes/openaiRoutes'));



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });