import { useState } from 'react'

function Button(props) {

    const [styles, setStyles] = useState("bg-black text-white ");

    const handleMouseDown = () => {
        setStyles("bg-gray-700 text-white ")
    }
    const handleMouseUp = () => {
        setStyles("bg-black text-white ")
    }

    return (
        <>
        <div onMouseUp= {handleMouseUp} onMouseDown={(event) => {handleMouseDown(); props.click();}} className={styles + "flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 border-3 border-black rounded-lg " + (props.icon=='+' ? " mt-3 mb-1" : " my-1")}>
            <p className="select-none   ">{props.icon}</p>
        </div>
        </>

    )
}

export default Button
