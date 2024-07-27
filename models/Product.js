const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModel = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', ProductModel);
