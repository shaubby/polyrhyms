import { useState } from 'react'

function Play(props) {

    const [styles, setStyles] = useState("bg-black text-white ");

    const handleMouseDown = () => {
        setStyles("bg-gray-700 text-white ")
    }
    

    return (

        <div  onMouseDown={props.click} className={styles + " content-center h-full border-3 border-black rounded-2xl "}>
            <p className={'select-none text-2xl place-self-center v-screen justify-center ' + (props.value!='running' ? "" : "text-bold")}>{props.value!='running' ? "►" : "| |"}</p>
        </div>


    )
}

export default Play
