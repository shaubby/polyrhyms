import { useState } from 'react'

function Button(props) {

    

    

    return (
        <>
        <div onClick={props.click} className={"place-self-center content-center h-6 w-6 border-3 border-black rounded-lg bg-olive" + (props.icon=='+' ? " mt-3 mb-1" : " my-1")}>
            <p className="place-self-center h-screen text-white">{props.icon}</p>
        </div>
        </>

    )
}

export default Button
