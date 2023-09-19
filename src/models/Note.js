const {Schema, model} = require('mongoose')

const Noteschema = new Schema({
    tille:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
})

module.exports = model('Note', Noteschema);