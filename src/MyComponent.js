import React, { useState } from "react"

const MyComponent = () => {
    const [username, setUsername] = useState('')
    const [isShown, setIsShown] = useState(true);
    const toggleShow = () => setIsShown(!isShown)
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    return ( 
        <div>
            <button onClick={toggleShow}>Toggle</button>
            {isShown && <div>This is great!</div>}
            <input type="text" id="username" value={username} onChange={handleChange} />
        </div>
     );
}
 
export default MyComponent;