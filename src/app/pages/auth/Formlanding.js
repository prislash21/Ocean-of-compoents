import React from 'react';
import './Formlanding.css';
export default function Formlanding() {
  return (
    <form className='form-container'>
      <h5>Deploy in seconds</h5>
      <hr />
      <div className='form-group'>
        <input type='text' placeholder='First Name' class='form-control' />
      </div>
      <div className='form-group'>
        <input type='email' placeholder='Email Address' class='form-control' />
      </div>
      <div className='form-group'>
        <input type='password' placeholder='Password' class='form-control' />
      </div>
      <button type='submit' class='btn btn-success btn-block'>
        Signup with email
      </button>
      <div className='kt-login__divider'>
        <div className='kt-divider'>
          <span />
          <span>OR</span>
          <span />
        </div>
      </div>
      <div className='kt-login__options'>
        <button type='submit' class='btn btn-info btn-lg btn-block'>
          <i class='fab fa-google' aria-hidden='true'></i> Signup with Google
        </button>
      </div>
    </form>
  );
}
