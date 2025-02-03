import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';  
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, token, setToken } = useContext(BlogContext);  
    const navigate = useNavigate(); 

    const logout = () => {
        navigate('/login');  
        localStorage.removeItem('token');
        setToken('');
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img
                    onClick={() => {
                        setShowSearch(true);
                        navigate('/collection'); // Use navigate here
                    }}
                    src={assets.search_icon}
                    className='w-5 cursor-pointer'
                    alt=""
                />

                <div className='group relative'>
                    <img
                        onClick={() => (token ? null : navigate('/login'))} // Use navigate here
                        className='w-5 cursor-pointer'
                        src={assets.profile_icon}
                        alt=""
                    />
                    {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    }
                </div>

                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className='w-5 cursor-pointer sm:hidden'
                    alt=""
                />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
