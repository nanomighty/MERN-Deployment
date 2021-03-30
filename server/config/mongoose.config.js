const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/petShelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the petShelter database"))
    .catch( (err) => console.log("Something went wrong when connecting to the petShelter database", err))
