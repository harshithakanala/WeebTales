import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [blogs, setBlogs] = useState([]);  
    const [token, setToken] = useState(''); 

    // Fetch all blogs
    const getBlogsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/blog/list');
            if (response.data.success) {
                setBlogs(response.data.blogs.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        getBlogsData();
    }, []);

    const value = {
        blogs,
        search, setSearch, showSearch, setShowSearch,
        backendUrl,
        setToken, token
    };


return (
    <BlogContext.Provider value={value}>
        {props.children}
    </BlogContext.Provider>
);
};

export default BlogContextProvider;
