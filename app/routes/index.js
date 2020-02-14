const server = require('express');
module.exports = app => {
    const tutorials = require("../controllers/tutorial.js");

    var tutorial = server.Router();
    var test =  server.Router();

    // Create a new Tutorial
    tutorial.post("/", tutorials.create);

    // Retrieve all Tutorials
    tutorial.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    tutorial.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    tutorial.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    tutorial.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    tutorial.delete("/:id", tutorials.delete);

    // Create a new Tutorial
    tutorial.delete("/", tutorials.deleteAll);

    test.get("/",function (req,res) {
       res.send('Hello World Tes');
    });
    app.use('/api/tutorials', tutorial);
    app.use('/api/test', test);
};