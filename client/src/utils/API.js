import axios from "axios";

export default {

    //Retrieve individual blog posts
    getBlogPost: function() {
    	return axios.get("api/blog/{id}");
    }
};
