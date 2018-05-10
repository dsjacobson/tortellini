const router = require("express").Router();
const blogRoutes = require("./blogs");


//Routes
router.use("/blogs", blogRoutes);

module.exports = router;
