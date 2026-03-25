import React from 'react';
import dollarImg from '../../assets/dollar-1.png'
import logo from '../../assets/logo.png'
import NavLinks from './NavLinks';
const Navbar = () => {
    return (
        <nav className='container mx-auto my-6'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-500">
                            <NavLinks />
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>

                <div className="navbar-end ">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex  mr-12 text-gray-500">
                        <NavLinks />
                    </ul>
                    <a className="btn">0 Coin <img src={dollarImg} alt="" /></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;