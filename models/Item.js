const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crear el schema
const ItemSchema = new Schema({
    name: {
        type: String,
        require : true
    
},
date: {
    type: Date,
    default: Date.now
}
});

module.exports = Item = mongoose.model('item', ItemSchema);