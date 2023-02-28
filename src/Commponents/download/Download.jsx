import { useState, useEffect } from 'react';
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import './Download.css'
const Download = () => {

  return (
    <div id='download'>
      <h6>دانلود اپلیکیشن ما</h6>
      <p>برنامه ی ما برای دانلود در همه ی فروشگاه ها موجود میباشد</p>
      <div className='download-apps'>
        <div className='app'>
          <span>اپل</span>
          <FaApple />
        </div>
        <div className='app'>
          <span>اندروید</span>
          <GrAndroid />
        </div>
        <div className='app'>
          <span>ویندوز</span>
          <FaWindows />
        </div>
      </div>
    </div>
  );
}

export default Download;