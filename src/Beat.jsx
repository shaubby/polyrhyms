import { useState } from 'react'

function Beat() {

    const [isPlaying, setIsPlaying] = useState(true);
    const handleClick = () => {
        setIsPlaying(false);
    }

    return (
        <div className="flex">
        <div className="flex-1 h-12 bg-red-50" onClick={handleClick}>
            <p>1</p>
        </div>
        <div className="flex-1 h-12 bg-red-100" onClick={handleClick}>
            <p>1</p>
        </div>
        <div className="flex-1 h-12 bg-red-500" onClick={handleClick}>
            <p>1</p>
        </div>
        </div>
    )
}

export default Beat
