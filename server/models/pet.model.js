const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema ({

    name: {
        type: String,
        unique: true,
        minlength: [3, "**Name must be at least 3 characters in length"],
        required: true

    },
    type : {
        type: String,
        minlength: [3, "**Type must be at least 3 characters in length"],
        required: true
    },
    description : {
        type: String,
        minlength: [3, "**Description must be at least 3 characters in length"],
        required: true
    },
    skill1 : {
        type: String,
    },
    skill2 : {
        type: String,
    },
    skill3 : {
        type: String
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('Pet', PetSchema);


