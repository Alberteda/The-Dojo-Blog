import React from "react";
import { useParams } from "react-router-dom";
import { useBlogApi } from "./api-hooks/useBlogApi";

const BlogDetails = () => {

    const { id } = useParams()
    const { blogs } = useBlogApi(`http://localhost:8000/blogs/${id}`)

    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
            <h3>{blogs?.title}</h3>
            <h3>{blogs?.body}</h3>
        </div>
    );
};

export default BlogDetails;
