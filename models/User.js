const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserModel = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide name"]
        },
        email: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw Error('Not a valid Email')
                }
            }
        },
        password: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('User', UserModel);
