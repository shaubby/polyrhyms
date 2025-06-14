import { useState, useEffect } from 'react'
const response = await fetch("https://api.github.com/repos/shaubby/polyrhyms", {
    method: "GET",
    headers: {
      Authorization: `token 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 ` 
    }});
const json = await response.json();
function Popup() {

    
    const [visible, setVisible] = useState(true);
    const [stars, setStars] = useState(0);
    useEffect(() => { 

        setStars(json.stargazers_count);  
    }, []);

    const handleClick = () => {
        setVisible(false)
    }
    return (
       
        <div className='absolute right-6 bottom-6 sm:top-6'>
             {visible? <div>
            <div onClick={handleClick} className={"w-10 h-10 absolute right-0 bg-white border-3 border-black font-mono text-black rounded-3xl flex justify-center items-center text-2xl select-none"}>x</div>
            <div className={"w-60 m-4 bg-white border-3 border-black font-mono text-black rounded-3xl px-5 py-5 "}>
                Go star on <a className = "underline" href="https://github.com/shaubby/polyrhyms" target="_blank">github</a>!!
                <br/>
                {stars + '/150 stars' }
            </div>
            </div> : null}
            
        </div>

    )
}

export default Popup
