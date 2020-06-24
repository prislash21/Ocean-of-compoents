import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../_metronic';
import '../../../_metronic/_assets/sass/pages/login/login-1.scss';
import NavBaar from './NavBaar';
import Formlanding from './Formlanding';
import Login from './Login';
import Landing from './Landing';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import './Landing.css';

export default function AuthPage() {
  console.log('authPage');
  return (
    <>
      <NavBaar />

      <div className='kt-grid kt-grid--ver kt-grid--root'>
        <div
          id='kt_login'
          className='kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1'
        >
          <div className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile'>
            <div
              className='kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside'
              style={{
                // backgroundImage: `url(${toAbsoluteUrl('/media/bg/bg-4.jpg')})`,
                backgroundColor: '#3d9c8f',
              }}
            >
              <div className='kt-grid__item'>
                <Link to='/' className='kt-login__logo'>
                  <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/logos/logo-4.png')}
                  />
                </Link>
              </div>
              <div className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver'>
                <div className='kt-grid__item kt-grid__item--middle'>
                  <h1 className='kt-login__title'>
                    Welcome to the Digital Cloud!
                  </h1>
                  <h3 className='kt-login__subtitle'>
                    We make it simple to launch in the cloud and scale up as{' '}
                    <br />
                    you grow-with an intuitive control panel, predictable <br />{' '}
                    pricing, team accounts and more.
                  </h3>
                </div>
              </div>
            </div>

            <div
              className='kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper'
              style={{
                backgroundColor: '#3d9c8f',
              }}
            >
              <Switch>
                <Route path='/auth/login' component={Login} />
                <Route path='/auth/landing' component={Landing} />
                <Route path='/auth/registration' component={Registration} />
                <Route
                  path='/auth/forgot-password'
                  component={ForgotPassword}
                />
                <Redirect from='/auth' exact={true} to='/auth/login' />
                <Redirect to='/auth/landing' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
