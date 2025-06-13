import { useState } from 'react'

function Beat(props) {

    

    const colorsList = ["bg-black", "bg-white"];

    return (
        <>
        <div onClick={props.click} className={"select-none font-mono flex items-center justify-center min-w-8 flex-1 h-20 border-3 rounded-2xl " + colorsList[props.type]}>
            <div>
            <p className={"text-lg text-center " + (props.type==1 ? "text-black" : "text-white")}>{props.number}</p>
            <div onClick = {props.accentClick} className={'flex items-center justify-center mt-2 text-md w-5 h-5 rounded-sm ' + (props.accent ? (props.type==1 ? 'text-white bg-black' : 'text-black bg-white') : (props.type==0 ? 'text-white bg-black' : 'text-black bg-white'))}><p className='text-center'>{'>'}</p></div>
            </div>  
        </div>
        </>

    )
}

export default Beat
