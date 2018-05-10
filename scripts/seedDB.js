const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tortellini",
    {
        useMongoClient: true
    }
);

const generalSeed = [
    {
        id: 1,
        key: 1,
        text: "Test",
        user: "Admin",
        date: "Today"
    }
];
const supportSeed = [
    {
        id: 1,
        key: 1,
        text: "Test",
        user: "Admin",
        date: "Today"
    }
];

const blogSeed = [
    {
        id: 1,
        key: 1,
        title: "Text",
        author: "Derek",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image: "https://picsum.photos/200/200?image=1"
    },

    {
        id: 2,
        key: 2,
        title: " More Text",
        author: "Carl",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image: "https://picsum.photos/200/200?image=8"
    },

    {
        id: 2,
        key: 2,
        title: "Test",
        author: "Kevin",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.",
        image: "https://picsum.photos/200/200?image=370"
    }

];


db.Blog
    .remove({})
    .then(() => dbBlog.collection.insertMany(blogSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted");
        process.exit(0);
    });
