const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    id: {type: Number, required: true },
    text: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;