import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';
import Formlanding from './Formlanding';
import './Landing.css';

function Landing() {
  return (
    <>
      <div className='kt-grid kt-grid--ver kt-grid--root'>
        <div
          id='kt_login'
          className='kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1'
        >
          <div className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile'>
            <div
              className='kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper'
              style={{
                backgroundColor: '#3d9c8f',
              }}
            >
              <Formlanding />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
