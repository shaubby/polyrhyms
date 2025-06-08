import { useState ,useEffect, useRef } from 'react'
import Beat from './Beat';
import Button from './Button';
import Visualizer from './Visualizer';
import { TaskTimer } from 'tasktimer';
function Row() {

    const [buttons1, setButtons1] = useState([0, 0, 0, 0]);
    const [buttons2, setButtons2] = useState([0, 0, 0, 0]);
    const [bpm, setBpm] = useState(120);
    const [time, setTime] = useState(0.0);
    const task1 = {
        id: 'heartbeat',
        tickDelay: 0,   // ticks (to wait before first run)
        tickInterval: 50, // ticks (interval)
        callback(task) { // can also be an async function, returning a promise
            console.log(task.id + ' task has run ' + task.currentRuns + ' times.');
        }
    };
    const [currentTime, setCurrentTime] = useState(0);
    const audioContextRef = useRef(null);

    useEffect(() => {
        // Initialize AudioContext when the component mounts
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const audioContext = audioContextRef.current;

        // Function to update the clock
        const updateTime = () => {
        setCurrentTime(audioContext.currentTime);
        requestAnimationFrame(updateTime); // Schedule the next update
        };

        // Start updating the clock
        updateTime();

        // Clean up when the component unmounts
        return () => {
        audioContext.close();
        };
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
    }
    // for(let i =0; i < buttons.length; i++){
    //     components.push(
    //         <Beat key={i}/>
    //     )
    // }
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
