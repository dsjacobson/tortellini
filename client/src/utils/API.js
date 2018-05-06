import axios from "axios";

export default {
    // Retrieves General Discussion Thread
    getGeneral: function() {
        return axios.get("/api/forum/general");
    },
    // Retrieves Technical Support Thread
    getSupport: function() {
        return axios.get("/api/forum/support");
    }

    //Retrieve individual blog posts
    getBlogPost: function() {
    	return axios.get("api/blog/{id}");
    }
};
