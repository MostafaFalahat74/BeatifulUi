import { useState, useEffect } from 'react';
import { BiHive, BiMenu, BiX } from "react-icons/bi";
import './Navbar.css'
const Navbar = () => {
    const [isDislayedNavbarToggle, setDislayedNavbarToggle] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbar-item'>
                <ul>
                    <li><a className='btn btn-light'>آموزش بیشتر</a></li>
                    <li><a className='btn btn-light'>خانه</a></li>
                    <li><a className='btn btn-light'>امکانات</a></li>
                    <li><a className='btn btn-light'>دانلود</a></li>
                    <li><a className='btn btn-light'>مشترک شوید</a></li>
                </ul>
            </div>
            <div className='navbar-logo'>
                
                <BiHive />
                <span>X</span>
                <p>Soicial</p>
            </div>
            <div className={isDislayedNavbarToggle?'navbar-toggle active':'navbar-toggle'}>
                <span onClick={()=>setDislayedNavbarToggle(!isDislayedNavbarToggle)}>
                  {isDislayedNavbarToggle? <BiMenu />:<BiX />}
                </span>
                <ul>
                    <li>آموزش بیشتر</li>
                    <li>خانه</li>
                    <li>امکانات</li>
                    <li>دانلود</li>
                    <li>مشترک شوید</li>
              </ul>
            </div>
        </div>
    );
}

export default Navbar;