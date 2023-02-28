import { useState, useEffect } from 'react';
import './Feature.css';
import { FeaturesList } from './data';
import { BsFillBookmarkStarFill, BsHexagon } from "react-icons/bs";
import phone from '../../assets/phone-features.png'

const Feature = () => {
  return (
    <div id="feature">
      <div className='feature-title'>
        <BsFillBookmarkStarFill />
        <span>ویژگی های اصلی</span>
        <p>اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
      </div>
      <div className='feature-content'>
        <div className='feature-right'>
          <img src={phone} />
        </div>
        <div className='feature-left'>
          {
            FeaturesList.map((feature) => {
              return (
                <div className='features-items'>
                  <div className='feature-logo'>
                    <BsHexagon />
                    <span className='inner-logo'>{feature.icon}</span>
                  </div>
                  <div className='feature-item'>
                    <h6>{feature.heading}</h6>
                    <p>{feature.text}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Feature;