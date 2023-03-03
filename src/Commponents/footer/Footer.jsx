import { useState, useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import './Footer.css'
import logo from './../../assets/logo.png'
const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-links'>
        <h4>لینک های مفید</h4>
        <a>پشتیبانی</a>
        <a>درباره ی ما</a>
        <a>آموزش</a>
        <a>هاستینگ</a>
        <a>پیام رسان</a>
      </div>
      <div className='footer-support'>
        <h4>پشتیبانی</h4>
        <a>پشتیبانی</a>
        <a>درباره ی ما</a>
        <a>آموزش</a>
        <a>هاستینگ</a>
        <a>پیام رسان</a>
      </div>
      <div className='communication-us'>
        <h4>راه های ارتباطی</h4>
        <p><FaMapMarkerAlt /> آدرس : شیراز سمت راست</p>
        <p><FaPhoneAlt />  تلفن : 0989111111111 </p>
        <p> <FaFax />  فکس : 0989111111111</p>
        <p> <FaEnvelope />  ایمیل : Example@gmail.com</p>
        <p><FaGlobe />  وبسایت : www.example.com </p>
      </div>
      <div className='footer-logo'>
        <img  src={logo}  />
        <p>&copy; Copyright 2021. TopLearn.com</p>
      </div>
    </div>
  );
}

export default Footer;