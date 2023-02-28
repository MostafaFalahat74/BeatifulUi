import { useState, useEffect } from 'react';
import phone from '../../assets/phone-header-bg.png'
import { BsMouse } from "react-icons/bs";
import './Header.css'
const Header = () => {

  return (
    <div id='header'>
      <div className='header-right'>
        <span>پیشرو در سطح جهانی</span>
        <span>امنیت در همه ی پلتفرم ها</span>
        <span>سیستم پیام رسانی</span>
        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و  اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</span>
        <div className='header-buttons'>
          <button className='btn btn-light'>بیایین شروع کنیم</button>
          <button className='btn'>چطوری  کار کنیم</button>
        </div>
      </div>
      <div className='header-left'>
        <img src={phone} />
      </div>
      <button className='mouse-btn'><BsMouse /></button>
    </div>
  );
}

export default Header;