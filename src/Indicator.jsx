import { useState, useEffect, useContext } from 'react'
import Beat from './Beat';
import Button from './Button';
import TimeContext from './TimeContext';
import ReactAudioContext from './AudioContext';
function Indicator(props) {

    const [left, setLeft] = useState({left: '0px'})
    const time = useContext(TimeContext)
    let audioContext = useContext(ReactAudioContext);
    let nextNote=0.55;
    let lastNote=0.55;
   

    let move = () => {
        if(audioContext.currentTime> nextNote) {
            nextNote+=time;
            lastNote+=time;
            
        }
        let val = (audioContext.currentTime-lastNote)/(nextNote-lastNote);
        val = Math.round(val*100);
        let string = val + '%';
        //console.log(string)
        setLeft({left: string});
    }
    
    useEffect(() => { 
            nextNote+=time;
            let interval = setInterval(move, 1);

            return () => {
                clearInterval(interval)
            }
    }, [time, audioContext]);
    
    return (

        <div onClick={()=> console.log(left)} className={'opacity-50 absolute inset-0 h-full w-2 bg-white z-50 rounded-full'} style={left}>

        </div>
        

    )
}

export default Indicator
