import { useState } from 'react'
import Beat from './Beat';
import Button from './Button';
function Row() {

    const [buttons1, setButtons1] = useState([0, 0, 0, 0]);
    const [buttons2, setButtons2] = useState([0, 0, 0, 0]);
    const [bpm, setBpm] = useState(120);
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
        <div className={"p-2 bg-white border-black border-3 flex flex-row rounded-3xl"}>
            <div className='flex-auto overflow-x-scroll'>
                <div className={"flex m-4"} >
                    {buttons1.map((button, index) => ( <Beat key={index} number={index+1} click={() => handleClick1(index)} type={buttons1[index]}/>))}
                </div>
                <div className={"flex m-4"}>
                    {buttons2.map((button, index) => ( <Beat number={index+1} click={() => handleClick2(index)} type={buttons2[index]} key={index}/>))}
                </div>
            </div>
            <div className='flex-none mr-4 ml-4 mb-2'>
                <div className={"flex flex-col"}>
                    <Button icon='+' click={() => handleBeat(1)}/>
                    <Button icon='-' click={() => handleBeat(-1)}/>
                    <Button icon='+' click={() => handleBeat(2)}/>
                    <Button icon='-' click={() => handleBeat(-2)}/>
                </div>
            </div>
        </div>
        <div className={"mt-6 p-4 bg-black border-black border-3 flex flex-row rounded-3xl"}>
            <div className='font-mono justify-center content-center flex-auto'>
                <p className={"text-white edit-profile"}>BPM + {bpm}<input type="number" value={bpm} onChange={handleBpm} className='text-center p-2 text-black bg-white rounded-full w-20'></input></p>
                
                <input type="range"   min="0" max="300" value={bpm} onMouseUp={handleBpm} className='appearance-none bg-white rounded-full h-1 w-full'></input>
            </div>
        </div>
        </div>

    )
}

export default Row
