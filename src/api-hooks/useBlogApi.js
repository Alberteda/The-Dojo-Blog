import { useEffect, useState } from "react"

export const useBlogApi = (url) => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => (blog.id !== id))
        setBlogs(newBlog)
    }

    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setBlogs(data)
        })
    }, [url])

    return {
        handleDelete,
        blogs, 
        setBlogs
    }
}