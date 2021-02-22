import { useState } from 'react'
export default function Button1() {
    const [count, setCount] = useState(0)

    return (
            <div className="common">
                <button onClick={()=> {setCount(count+1)}}>{count}</button>
            </div>     

    )

}