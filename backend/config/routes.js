const axios = require('axios');
const Users = require('../models/jokes');

const {
  authenticate,
  generateToken
} = require('../auth/authenticate');

const {
  hashPassword,
  comparePassword
} = require('../auth/bcrypt');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  try {
    const {
      body
    } = req;
    const hash = await hashPassword(body.password);
    // console.log(hash)
    const user = await Users.addUser({
      ...body,
      password: hash
    });
    if (!user) {
      return res.status(400).json('user was not added')
    }
    res.status(201).json(user)
  } catch (error) {
    return res.status(500).json('Error can not add user')
  }
}

async function login(req, res) {
  // implement user login
  try {
    const {
      body
    } = req;
    const user = await Users.find(req.body.username)
    const compare = comparePassword(body.password, user[0].password)
    if (!compare) {
      return res.status(400).json('Invalid request')
    }
    res.status(200).json({
      user,
      token: generateToken(user)
    })
  } catch (error) {
    res.status(500).json('Error cannot login')
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: {
      accept: 'application/json'
    },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error Fetching Jokes',
        error: err
      });
    });
}