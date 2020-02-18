module.exports = app => {
    const tutorials = require("../controllers/tutorial.js");
    app.route("/api/tutorials")
        .post(tutorials.create)
        .get(tutorials.findAll)
        .delete(tutorials.deleteAll);
    app.route("/api/tutorials/published")
        .get(tutorials.findAllPublished);
    app.route("/api/tutorials/:id")
        .get(tutorials.findOne)
        .put(tutorials.update)
        .delete(tutorials.delete);
};