import { useState, useEffect } from 'react';
import './Subscribe.css'
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Subscribe = () => {

  return (
    <div id='subscribe'>
      <h5>حالا مشترک شوید!</h5>
      <form>
        <button>مشترک شدن</button>
        <input placeholder='ایمیل خود را وارد کنید' />
      </form>
      <div className='subscribe-icons'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <TiSocialGooglePlus />
      </div>
    </div>
  );
}

export default Subscribe;