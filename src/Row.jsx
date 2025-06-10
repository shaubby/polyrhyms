import { useState ,useEffect, useRef } from 'react'
import Beat from './Beat';
import Button from './Button';
import Visualizer from './Visualizer';
let audioContext = new AudioContext();
let out = audioContext.destination;



function Row() {

    const [buttons1, setButtons1] = useState([0, 0, 0, 0]);
    const [buttons2, setButtons2] = useState([0, 0, 0, 0]);
    const [bpm, setBpm] = useState(120);
    let nextNote = 1;
    const [delay, setDelay] = useState(1);
    const [refreshRate, setRefreshRate] = useState(10);

    let metronome = () => {
        if(audioContext.currentTime > nextNote) {
            nextNote = nextNote+delay;
            const osc = audioContext.createOscillator();
            const envelope = audioContext.createGain();
            
            osc.frequency.value = 800;
            envelope.gain.value = 1;
            envelope.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + 0.001);
            envelope.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.02);
    
            osc.connect(envelope);
            envelope.connect(out);
        
            osc.start(audioContext.currentTime);
            osc.stop(audioContext.currentTime + 0.03);
            console.log("resume");
        }
        //console.log(audioContext.currentTime);
    }

    this.interval = setInterval(metronome, refreshRate);
    console.log("resume1");
    //ComponentDidMount
    useEffect(() => {
        setDelay(60.0/bpm);
    }, []);
    
    
    
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
    }
    const handleBpm = (event) => {
        setBpm(event.target.value);
        setDelay(60.0/bpm);
        audioContext.resume();
        console.log("resume");
    }
    
    // Component did mount
    useEffect(() => {
        
       
                
    }, []);

    return (
        <div className='w-1/2 p-14 bg-white border-3 border-lightgray mt-10 rounded-3xl'>
            
            <Visualizer key={333} beat1={buttons1} beat2={buttons2}/>

        <div className={"p-2 bg-white border-black border-3 flex flex-row rounded-3xl"}>
            <div className='flex-auto'>
                <div className={"flex m-4"} >
                    {buttons1.map((button, index) => ( <Beat key={index} number={index+1} click={() => handleClick1(index)} type={buttons1[index]}/>))}
                </div>
                <div className={"flex m-4"}>
                    {buttons2.map((button, index) => ( <Beat number={index+1} click={() => handleClick2(index)} type={buttons2[index]} key={index}/>))}
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
