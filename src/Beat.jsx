import { useState } from 'react'

function Beat(props) {

    

    const colorsList = ["bg-black", "bg-white"];

    return (
        <>
        <div onClick={props.click} className={"grow font-mono content-center min-w-12 flex-1 h-20 mx-1 border-3 rounded-2xl " + colorsList[props.type]}>
            <p className={"text-lg place-self-center " + (props.type==1 ? "text-black" : "text-white")}>{props.number}</p>
        </div>
        </>

    )
}

export default Beat
