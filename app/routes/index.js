module.exports = app => {
    const tutorials = require("../controllers/tutorialController");
    const user = require("../controllers/userController");
    const upload = require("../controllers/uploadFilesController");
    ///tutorials routes
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
    ///users routes
    app.route('/api/users')
        .get(user.findAll)
        .post(user.create);
    app.route('/api/user/:id')
        .get(user.findOne)
        .put(user.update)
        .delete(user.delete);
    /// fileupload
    app.route('/api/upload')
        .post(upload.uploadSingle)

};