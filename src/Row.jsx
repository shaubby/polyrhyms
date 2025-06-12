import { useState ,useEffect, useRef, createContext } from 'react'
import Beat from './Beat';
import Button from './Button';
import Visualizer from './Visualizer';
import Play from './Play'
import TimeContext from './TimeContext'
import ReactAudioContext from './AudioContext';
import DelayContext from './DelayContext';

let audioContext = new AudioContext();
let out = audioContext.destination;


function Row(props) {

    const [buttons1, setButtons1] = useState([0, 0, 0, 0]);
    const [accent1, setAccent1] = useState([1, 0, 0, 0]);
    const [accent2, setAccent2] = useState([1   , 0, 0, 0]);
    const [buttons2, setButtons2] = useState([0, 0, 0, 0]);
    const [bpm, setBpm] = useState(120);
    
    const [delay, setDelay] = useState(60/bpm);
    const [delay2, setDelay2] = useState(60/bpm);
    const [refreshRate, setRefreshRate] = useState(1);
    const [metInterval, setMetInterval] = useState(0);
    const [time, setTime] = useState(0);
    const [contextDelay, setContextDelay] = useState(0);
    let nextNote = 0.5;
    let index1 = 0;
    let index2 = 0;
    let nextNote2 =0.5;
    let metronome = () => {

        if(audioContext.currentTime > nextNote) {
            nextNote = nextNote+delay;
            if(contextDelay==0){setContextDelay(audioContext.currentTime)};
            
            if(buttons1[index1] != 1) {
                //console.log(bpm);   
                const osc = audioContext.createOscillator();
                const envelope = audioContext.createGain();
                if(accent1[index1] == 1) osc.frequency.value=1800;
                else osc.frequency.value = 1600;
                envelope.gain.value = 1;
                envelope.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + 0.001);
                envelope.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05  );

                
                osc.connect(envelope);
                envelope.connect(out);
            
                osc.start(audioContext.currentTime);
                osc.stop(audioContext.currentTime + 0.03);
                //console.log("resume");
            }
            index1+=1;
            if(index1 >= buttons1.length) index1=0;
        }
        if(audioContext.currentTime > nextNote2) {
            nextNote2 = nextNote2+delay2;
            
            if(buttons2[index2] != 1) {
                //console.log(bpm);   
                const osc = audioContext.createOscillator();
                const envelope = audioContext.createGain();
                
                if(accent2[index2] == 1) osc.frequency.value=1000;
                else osc.frequency.value = 800;
                envelope.gain.value = 1;
                envelope.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + 0.001);
                envelope.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.01    );


                osc.connect(envelope);
                envelope.connect(out);
            
                osc.start(audioContext.currentTime);
                osc.stop(audioContext.currentTime + 0.05);
                //console.log("resume");
            }
            index2+=1;
            if(index2 >= buttons2.length) index2=0;
        }
        //console.log(audioContext.currentTime);
        //console.log(audioContext.currentTime);
        setTime(prevTime => audioContext.currentTime);
    }

    
    let metronome2 = () => {
        
    }
    
    useEffect(() => { 

        audioContext.resume();

        let interval = setInterval(metronome, refreshRate);
        let interval2 = setInterval(metronome2, refreshRate);

        setDelay(prevDelay => (60.0/bpm)/buttons1.length);
        setDelay2(prevDelay => (60.0/bpm)/buttons2.length);
        return () => {
            audioContext.close();
            audioContext = new AudioContext();
            out = audioContext.destination;

            //clearTimeout(timeout);

            clearInterval(interval);
            clearInterval(interval2);

        }
    }, [bpm, delay, buttons1, accent1,buttons2, accent2, delay2]);
  

    
    
    
    
    
    const handleClick1 = (index) => {
        let newButtons = buttons1.map(x =>x);
        newButtons[index] += 1;
        if(newButtons[index] > 1){
            newButtons[index] = 0;
        }
        setButtons1(newButtons);
    }
    const handleClick2 = (index) => {
        let newButtons = buttons2.map(x =>x);
        newButtons[index] += 1;
        if(newButtons[index] > 1){
            newButtons[index] = 0;
        }
        setButtons2(newButtons);
    }

    const handleAccent1 = (event,index) => {
        let newAccents = accent1.map(x =>x);
        newAccents[index] += 1;
        if(newAccents[index] > 1){
            newAccents[index] = 0;
        }
        setAccent1(newAccents); 
        event.stopPropagation() 
    }
    const handleAccent2 = (event,index) => {
        let newAccents = accent2.map(x =>x);
        newAccents[index] += 1;
        if(newAccents[index] > 1){
            newAccents[index] = 0;
        }
        setAccent2(newAccents);
        event.stopPropagation()
    }

    const handleBeat = (value) => {
        if(value==2) {
            let newButtons = buttons2.map(x =>x);
            newButtons.push(0);
            setButtons2(newButtons);
        } else if(value==1) {
            let newButtons = buttons1.map(x =>x);
            newButtons.push(0);
            setButtons1(newButtons);
        } else if(value==-2) {
            let newButtons = buttons2.map(x =>x);
            newButtons.pop(newButtons.length-1);
            setButtons2(newButtons);
        } else if(value==-1) {
            let newButtons = buttons1.map(x =>x);
            newButtons.pop(newButtons.length-1);
            setButtons1(newButtons);
        }
        setDelay(60.0/bpm/buttons1.length);
        setDelay2((60.0/bpm)/buttons2.length);
    }
    const handleBpm = (event) => {
        setBpm(prevBpm => event.target.value);
        setDelay(prevDelay => (60.0/bpm)/buttons1.length);
        setDelay2(prevDelay => (60.0/bpm)/buttons2.length);
    }
    


    return (
        <div  className=' w-3/4 p-14 bg-white border-3 border-lightgray mt-10 rounded-3xl'>
            <div className='flex'>
                <div className='flex-1 mr-5'>
                <ReactAudioContext value={audioContext}>
                <TimeContext.Provider value = {delay*buttons1.length}>
                <Visualizer context={audioContext} key={333} beat1={buttons1} beat2={buttons2}/>
                </TimeContext.Provider>
                </ReactAudioContext>
                </div>
                <div className='flex-1 ml-5'>
                <Play click = {() => audioContext.resume()}/>
                </div>
            </div>
        <div className={"p-2 mt-6 bg-white border-black border-3 flex flex-row rounded-3xl"}>
            <div className='flex-auto'>
                <div className={"flex m-4"} >
                    {buttons1.map((button, index) => ( <Beat accentClick = {(event) => handleAccent1(event,index)} key={index} number={index+1} click={() => handleClick1(index)} accent={accent1[index]} type={buttons1[index]}/>))}
                </div>
                <div className={"flex m-4"}>
                    {buttons2.map((button, index) => ( <Beat accentClick = {(event) => handleAccent2(event,index)} number={index+1} click={() => handleClick2(index)} accent={accent2[index]} type={buttons2[index]} key={index}/>))}
                </div>
            </div>
            <div className='flex-none mr-4 ml-4 mb-2'>
                <div className={"flex flex-col"}>
                    <Button key= {23} icon='+' click={() => handleBeat(1)}/>
                    <Button key= {24} icon='-' click={() => handleBeat(-1)}/>
                    <Button key= {25}  icon='+' click={() => handleBeat(2)}/>
                    <Button key= {26} icon='-' click={() => handleBeat(-2)}/>
                </div>
            </div>
        </div>
        <div className={"mt-6 p-4 bg-black border-black border-3 flex flex-row rounded-3xl"}>
            <div className='font-mono justify-center content-center flex-auto'>
                <p className={"text-white edit-profile"}>BPM + <input type="number" value={bpm} onChange={handleBpm} className='text-center p-2 text-black bg-white rounded-full w-20'></input></p>
                
                <input type="range" defaultValue={bpm} min="0" max="300" onChange={handleBpm} className='appearance-none bg-white rounded-full h-1 w-full'></input>
            </div>
        </div>
        
        </div>

    )
}

export default Row

