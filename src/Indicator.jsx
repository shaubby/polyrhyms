import { useState } from 'react'
import Beat from './Beat';
import Button from './Button';
function Indicator(props) {

    const [left, setLeft] = useState(0)

    useEffect(() => { 
    
    
            //let interval = setInterval(metronome, refreshRate);

            return () => {
                audioContext.close();
                audioContext = new AudioContext();
                out = audioContext.destination;
    
                //clearTimeout(timeout);
    
                //clearInterval(interval);
                //clearInterval(interval2);
    
            }
        }, []);
    
    return (

        <div className={'absolute inset-0 h-full w-2 bg-white right-5 z-50 rounded-full ' + 'left-' + left}></div>


    )
}

export default Indicator
