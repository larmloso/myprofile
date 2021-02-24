import React , { useState , useEffect}from 'react'
import { Link } from 'react-router-dom';
import { FaDog } from 'react-icons/fa'
import  { FaBars, FaTimes} from 'react-icons/fa';
import {BsPersonSquare} from 'react-icons/bs';
import {Button} from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =()=> setClick(!click);
    const closeMobileMenu =()=> setClick(false);

    const showButton =()=> {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, [])
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <BsPersonSquare className='navbar-icon'/>
                        My Profile
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes />: <FaBars />}
                    </div>

                    {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/tracking' className="nav-links" onClick={closeMobileMenu}>
                                ติดตามพัสดุ
                            </Link>
                        </li>


                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'>สมัครสมาชิก</Button>
                                </Link>
                            ): (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                    >สมัครสมาชิก</Button>
                                </Link>
                            )}
                        </li>

                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-in' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'>เข้าสู่ระบบ</Button>
                                </Link>
                            ): (
                                <Link to='/sign-in' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                    >เข้าสู่ระบบ</Button>
                                </Link>
                            )}
                        </li>
                    </ul> */}
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
