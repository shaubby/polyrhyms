import { useState } from 'react'

function Play(props) {

    const [styles, setStyles] = useState("bg-black text-white ");

    const handleMouseDown = () => {
        setStyles("bg-gray-700 text-white ")
    }
    

    return (

        <div onMouseDown={props.click} className={styles + " flex items-center justify-center h-full border-3 border-black rounded-2xl " + (props.value!='running' ? "bg-black" : "bg-white")}>
            <p className={'select-none text-2xl ' + (props.value!='running' ? "text-white" : "text-bold text-black")}>{props.value!='running' ? "▶" : "| |"}</p>
        </div>


    )
}

export default Play
