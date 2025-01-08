// import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className="bg-orange-600 px-5 py-3 justify-between text-white text-3xl font-bold">
            <Link className="ml-4 bg-yellow-400 px-4 py-2" to={'/home'}>Home</Link>
            <Link className="ml-4 bg-yellow-400 px-4 py-2" to={'/about'}>About</Link>
            <Link className="ml-4 bg-yellow-400 px-4 py-2" to={'/service'}>Services</Link>
            <Link className="ml-4 bg-yellow-400 px-4 py-2" to={'/bloge'}>Bloges</Link>
            <Link className="ml-4 bg-yellow-400 px-4 py-2" to={'/contact'}>Contact</Link>

        </div>
    );
};

export default Nav;