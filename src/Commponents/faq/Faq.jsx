import { useState, useEffect } from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { questions } from './data'
import './Faq.css'
import Question from './Question'
const Faq = () => {
  const [isOpenedAccordion, setOpenAccordion] = useState(false)
  return (
    <div className='faq'>
      <div className='title'>
        <MdOutlineLibraryBooks />
        <h4>سوالات متداول</h4>
        <p>اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
      </div>
      <div className='questions'>
        {
          questions.map((item) =>
          <Question  answer={item.answer}  title= {item.title} />
          )
        }
      </div>
    </div>
  );
}

export default Faq;