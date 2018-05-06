const router = require("express").Router();
const generalRoute = require("./general");
const supportRoute = require("./support");
const blogRoute = require("./blog");


//Routes
router.use("/blog/{id}", blogRoute);

module.exports = router;
