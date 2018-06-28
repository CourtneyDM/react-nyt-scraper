const router = require("express").Router();
const routes = require('../../controllers/routes');

// Matches with "/api/books"
router.route("/")
    .get(routes.findAll)
    .post(routes.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(routes.findById)
    .put(routes.update)
    .delete(routes.remove);

module.exports = router;
