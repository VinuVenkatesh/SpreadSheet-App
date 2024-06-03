const mongoose = require ('mongoose');
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }
})

const login = mongoose.model('Login', loginSchema, 'Login');
module.exports = login;