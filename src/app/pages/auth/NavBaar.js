import React from 'react';
import './NavStyle.css';

const NavBaar = () => {
  return (
    <div className='fixed-top'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          <span className='nw'>NEW</span>
          <span className='t1'>
            Build secure Apps with VPC and a Trustworthy Foundation
          </span>
        </a>
        <button className='navbar-toggler' data-toggler='collapse'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a href='/docs' className='nav-link'>
                docs
              </a>
            </li>
            <li className='nav-item'>
              <a href='/get support' className='nav-link'>
                Get Support
              </a>
            </li>
            <li className='nav-item'>
              <a href='/sales' className='nav-link'>
                Sales
              </a>
            </li>
            <li className='nav-item'>
              <a href='/signin' className='nav-link'>
                Sign In
              </a>
            </li>
          </ul>
        </div>

        <hr className='nvstyle' />
      </nav>

      <nav className='navbar  navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand' href='#'>
          <img
            src='./img/logo.png'
            width='180'
            height='30'
            alt=''
            loading='lazy'
          />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
              >
                Products
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Marketplace
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Customers
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Partners
              </a>
            </li>

            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Community
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/pricing'>
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <form className='form-inline'>
          <button
            className='btn btn-outline-primary'
            href='/signup'
            type='button'
          >
            Sign Up
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBaar;
