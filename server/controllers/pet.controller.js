const Pet = require('../models/pet.model');

module.exports = {
    getAllPets: (req, res) => {
        Pet.find({})
            .sort({type: "ascending"})
            .then(pets => {res.json(pets)})
            .catch(err => {
                console.log("error found in getAllPets");
                res.json(err);
            });
    },
    createAPet: (req, res) => {
        const { name, type, description, skill1, skill2, skill3 } = req.body;
        Pet.create({
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        })
            .then((newPet) => {
                res.json(newPet);
            })
            .catch((err) => {
                console.log("error found in createAPet");
                res.json(err);
            });
    },
    getAPet: (req, res) => {
        Pet.findOne({_id: req.params._id})
            .then(pet => {res.json(pet)})
            .catch(err => {
                console.log("error found in getAPet");
                res.json(err);
            });
    },
    updatePet : (req, res) => {
        Pet.findOneAndUpdate( {_id: req.params._id}, req.body, {
            new: true,
            runValidators: true,
        })
                .then(updatedPet => {res.json(updatedPet)})
                .catch(err => {
                    console.log("error found in updatePet");
                    res.json(err);
                });
    },
    deletePet : (req, res) => {
        Pet.deleteOne({_id: req.params._id})
            .then(deletedPet => {res.json(deletedPet)})
            .catch(err => {
                console.log("error found in deletePet");
                res.json(err);
            });
    }
}