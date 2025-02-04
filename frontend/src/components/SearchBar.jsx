import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(BlogContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {  
        setVisible(true);
    } else {
        setVisible(false)
    }
}, [location]);

  return showSearch && visible ? (
    <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full w-full max-w-[400px]">
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="flex-1 bg-transparent text-gray-800 outline-none text-sm placeholder-gray-500"
        type="text" 
        placeholder="Search Blog Posts..."
      />
      <img className="w-5 cursor-pointer ml-2" src={assets.search_icon} alt="Search" />
      <img 
        onClick={() => setShowSearch(false)} 
        className="w-5 cursor-pointer ml-2" 
        src={assets.cross_icon} 
        alt="Close Icon" 
      />
    </div>
  ) : null;
};

export default SearchBar;
