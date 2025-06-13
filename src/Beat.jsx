import { useState } from 'react'

function Beat(props) {

    

    const colorsList = ["bg-black", "bg-white"];

    return (
        <>
        <div onClick={props.click} className={"select-none font-mono content-center min-w-12 flex-1 h-20 mx-1 border-3 rounded-2xl " + colorsList[props.type]}>
            <p className={"text-lg place-self-center " + (props.type==1 ? "text-black" : "text-white")}>{props.number}</p>
            <div onClick = {props.accentClick} className={'mt-2 place-self-center content-center text-md w-5 h-5 rounded-sm flex-col ' + (props.accent ? (props.type==1 ? 'text-white bg-black' : 'text-black bg-white') : (props.type==0 ? 'text-white bg-black' : 'text-black bg-white'))}><p className='flex-1 place-self-center'>{'>'}</p></div>
        </div>
        </>

    )
}

export default Beat
