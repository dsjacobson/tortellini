const router = require("express").Router();
const generalRoute = require("./general");
const supportRoute = require("./support");
const blogRoute = require("./blogs");


//Routes
router.use("/blogs/{id}", blogRoute);

module.exports = router;
