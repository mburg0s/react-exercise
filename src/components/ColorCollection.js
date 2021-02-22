import {useState} from 'react'
// import { store } from './Provider'
// export const [curColor, setColor] = useContext()
export let currentColor = ''
// export let currentID = ''
export default function ColorCollection (props) {
        // const globalState = useContext(store)
        // const { dispatch } = globalState
        const [currentID, setCurrentID] = useState('')
        function editColor(curC,curID) {
            document.querySelector('#color').value = curC
            // debugger
            currentColor = curC
            currentID = curID

        }

    return (
        <div className="resultContainer">
            {props.color.map((c) => ( 
                <div 
                    className="colorContainer" style={{backgroundColor: c.color}} key = {c.id}                
                        onClick = {() => editColor(c.color,c.id)}
                >
                    {/* {c.color}  */}
                </div>
            ))} 
        </div>            

    )
 }