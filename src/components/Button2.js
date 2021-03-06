import { useState, useEffect } from 'react'

export default function Button1() {
    const handleClick = () => setCount( count + 1)
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        // eslint-disable-next-line
        if (count == 5) {
            alertHello()
        }
    },[count])

    function alertHello() {
        alert('Hello')
    }

    return (
            <div className="common">
                <button onClick={handleClick}>{count}</button>
            </div>     

    )

}