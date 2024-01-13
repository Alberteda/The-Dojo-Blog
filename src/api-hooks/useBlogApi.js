import { useEffect, useState } from "react"

export const useBlogApi = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => (blog.id !== id))
        setBlogs(newBlog)
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setBlogs(data)
        })
    }, [])

    return {
        handleDelete,
        blogs, 
        setBlogs
    }
}