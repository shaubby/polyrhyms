import { useState } from 'react'
import Beat from './Beat';
import Button from './Button';
function Row(props) {

    
    return (
        <div className='p-4 mb-6 bg-black flex rounded-3xl'>
            <div className='flex-auto'> 
            {props.beat1.map((button, index) => ( <div className='flex-1'><div key={index} className={"relative w-2 h-10 rounded-full bg-red-500"}></div></div>))}
            </div>
            <div className='flex-auto' >
            {props.beat2.map((button, index) => ( <div className='flex-1'><div key={index} className={"relative w-2 h-10 rounded-full bg-blue-500"}></div></div>))}
            </div>
        </div>

    )
}

export default Row
