import { useState, useContext } from 'react'
import Beat from './Beat';
import Button from './Button';
import Indicator from './Indicator';
function Row(props) {

    
    
    return (
        <div className='p-6 bg-black rounded-2xl'>
            
            <div className=' relative'>
            <Indicator context={props.context}/>
            <div className='flex mb-2'> 
            {props.beat1.map((button, index) => ( <div className='flex-1'><div key={index} className={"relative w-2 h-10 rounded-full " + (button==0 ? "bg-red-500" : "bg-black")}></div></div>))}
            </div>
             <div className='flex'>
            {props.beat2.map((button, index) => ( <div className='flex-1'><div key={index} className={"relative w-2 h-10 rounded-full " + (button==0 ? "bg-blue-500" : "bg-black")}></div></div>))}
            </div> 
            <div className=''></div>
            </div>
            
        </div>

    )
}

export default Row
