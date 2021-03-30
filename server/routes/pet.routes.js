const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get("/api/pet", PetController.getAllPets);
    app.post("/api/pet", PetController.createAPet);
    app.get("/api/pet/:_id", PetController.getAPet);
    app.put("/api/pet/:_id", PetController.updatePet);
    app.delete("/api/pet/:_id", PetController.deletePet);
}


