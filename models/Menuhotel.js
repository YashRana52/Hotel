const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Fix spelling from 'require' to 'required'
    },
    price: {
        type: Number,
        required: true,  // Fix spelling from 'require' to 'required'
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,  // Fix spelling from 'require' to 'required'
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    },
});

const Menuhotel = mongoose.model('Menuhotel', menuSchema);
module.exports = Menuhotel;
