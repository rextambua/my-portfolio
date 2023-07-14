import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import './NavBAr.css'
import {Reorder} from "@mui/icons-material";


function NavBar(props) {
    const[expandNavBar, setexpandNavBAr] = useState()
    const location = useLocation();
    useEffect(() =>
    {
        setexpandNavBAr(false)
    }, [location])

    return (
        <div className='navbar' id={expandNavBar? 'open' : 'close'}>
            <div className='toggleButton'>
                <button> <Reorder onClick=
                                      {() => {setexpandNavBAr((prev) => !prev) }}></Reorder>
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
    );
}

export default NavBar;