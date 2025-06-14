import { useState, useEffect } from 'react'

function Popup() {

    
    const [visible, setVisible] = useState(true);


    const handleClick = () => {
        setVisible(false)
    }
    return (
       
        <div className='absolute right-6 bottom-6'>
             {visible? <div>
            <div onClick={handleClick} className={"w-10 h-10 absolute right-0 bg-white border-3 border-black font-mono text-black rounded-3xl flex justify-center items-center text-2xl select-none"}>x</div>
            <div className={"w-60 m-4 bg-white border-3 border-black font-mono text-black rounded-3xl px-5 py-5 "}>
                 Make sure to turn off silent/vibrate!<br/>
                <p className='font-bold'>Please go star on <a className = "underline" href="https://github.com/shaubby/polyrhyms" target="_blank">github</a>!!</p>
                
            </div>
            </div> : null}
            
        </div>

    )
}

export default Popup
