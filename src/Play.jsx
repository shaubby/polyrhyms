import { useState } from 'react'

function Play(props) {

    const [styles, setStyles] = useState("bg-black text-white ");

    const handleMouseDown = () => {
        setStyles("bg-gray-700 text-white ")
    }
    const handleMouseUp = () => {
        setStyles("bg-black text-white ")
    }

    return (
        <>
        <div onMouseUp= {handleMouseUp} onMouseDown={props.click} className={styles + " mt-5 place-self-center content-center w-full h-20 border-3 border-black rounded-2xl "}>
            <p className="select-none place-self-center v-screen justify-center "></p>
        </div>
        </>

    )
}

export default Play
