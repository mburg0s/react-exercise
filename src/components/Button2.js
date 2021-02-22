import { useState, useEffect } from 'react'

export default function Button1() {
    const handleClick = () => setCount( count + 1)
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        if (count === 5) {
            alertHello()
        }
    },[count])

    function alertHello() {
        alert('Hello')
    }

    return (
            <div>
                <button onClick={handleClick}>{count}</button>
            </div>     

    )

}