import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import './Faq.css'
const Question = ({ title , answer}) => {
    const [isOpenedAccordion, setOpenAccordion] = useState(false)
    return (
        <div className='question' >
            <div className='question-title'>
                <h6 >{title}</h6>
                <span onClick={() => setOpenAccordion(!isOpenedAccordion)}>
                    {isOpenedAccordion ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>

            </div>
            {isOpenedAccordion &&
                <div className='answer-question'>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default Question