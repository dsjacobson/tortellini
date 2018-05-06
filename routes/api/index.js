const router = require("express").Router();
const generalRoute = require("./general");
const supportRoute = require("./support");
const blogRoute = require("./blog");


//Routes
router.use("/forum/general", generalRoute);
router.use("/forum/support", supportRoute);
router.use("/blog/{id}", blogRoute);

module.exports = router;
