import { useState } from 'react'
import Beat from './Beat';
import Row from './Row';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// https://coolors.co/37392e-19647e-28afb0-ddcecd-eee5e5
// https://coolors.co/37392e-284f56-19647e-218a97-28afb0-83bfbf-ddcecd-eee5e5
// https://coolors.co/272727-d4aa7d-efd09e-d2d8b3-90a9b7  
// https://coolors.co/191308-322a26-454b66-677db7-9ca3db
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center">
      
        <Row/>
      
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
