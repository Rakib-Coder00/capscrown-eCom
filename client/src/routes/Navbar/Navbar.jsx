import React from 'react'
import { Fragment } from 'react'
import './Navbar.scss'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../components/assets/086 crown.svg';

const Navbar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar