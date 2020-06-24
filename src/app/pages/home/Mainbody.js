import React from 'react';
import './BodyStyle.css';
import NavBaar from './NavBaar';

const Mainbody = () => {
  return (
    <div>
      <NavBaar />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm'>
            <div className='mybodyone'>
              <p>
                <strong>Free Credit Active</strong>: Get Started on digitalocean
                with a $100 , 60 days credit for new users.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={
              'https://www.animatedimages.org/data/media/230/animated-bird-image-0251.gif'
            }
            alt=''
            className='mybird'
          />
        </div>

        {/* <img src={logo} className='mycloud' alt='logo' /> */}
        <div className='row'>
          <div className='col-12 col-sm-8'>
            <div className='mywel'>
              <div className='a'>
                {' '}
                Welcome to the <br /> Developer Cloud
              </div>
              <div className='b'>
                We make it simple to launch in the cloud and scale up as <br />
                you grow-with an intuitive control panel, predictable <br />{' '}
                pricing, team accounts and more.
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-3'>
            <form className='form-container'>
              <h5>Deploy in seconds</h5>
              <hr />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='First Name'
                  class='form-control'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  class='form-control'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  class='form-control'
                />
              </div>
              <button type='submit' class='btn btn-primary btn-block'>
                Signup with email
              </button>
              <hr />
              <button type='button' className='btn btn-outline-primary '>
                Signup with gmail
              </button>

              <button type='button' className='btn btn-outline-primary'>
                <img
                  data-src='https://images.prismic.io/www-static/ae808fab-d9d7-458e-b368-05344b7ad308_icon-github.svg?auto=compress,format'
                  src='https://images.prismic.io/www-static/ae808fab-d9d7-458e-b368-05344b7ad308_icon-github.svg?auto=compress,format'
                  alt='icon'
                  className='null blur-up css-1pq2esu ls-is-cached lazyloaded'
                />{' '}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
