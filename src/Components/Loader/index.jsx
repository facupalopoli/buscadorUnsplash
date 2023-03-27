import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './Loader.css'

const Loader = () => {
    return(
        <div className='loading'>
            <AiOutlineLoading3Quarters className='iconLoad'/>
        </div>
    )
}

export { Loader }