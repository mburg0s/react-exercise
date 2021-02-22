import {useContext, useState} from 'react'
import { store } from './Provider'
// import ColorCollection from './ColorCollection'
// import {currentColor, currentID} from './ColorCollection'
// export let blnEdit = false
// export let currentColor = ''
// export let currentID = ''


export default function FormColor() {
    const [currentID, setCurrentID] = useState('')
    const [currentColor, setCurrentColor] = useState('')
    const globalState = useContext(store)
    const [text, setText] = useState('')

    
    const color = globalState.state.color 

    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        console.log(dispatch.action)
        const validC = isValidColor(text) 
        console.log(currentColor, currentID)
        if ((validC) && (currentColor ==='')) {
            dispatch({type: 'ADD_COLOR', payload: text})
            setText('')
        }
        else { if ((validC && currentColor !== '') || (currentColor === text)) {
            console.log(text, 'color')
            dispatch({type: 'EDIT_COLOR', payload: currentID})
            setText('')
            setCurrentID('')
            setCurrentColor('')
            // currentID = ''
            // currentColor = ''
            // blnEdit = true


        } else { if (!validC) {
            alert('Invalid color')
            } 
        }  
        }    
   
    }

    function isValidColor(str) {
        return str.match(/^#[a-f0-9]{6}$/i) !== null;
    }  

    function editColor(curC,curID) {
        // e.preventDefault
        document.querySelector('#color').value = curC
        // debugger
        // currentColor = curC
        setCurrentColor(curC)
        setCurrentID(curID)
        // currentID = curID

    }

    return (
        <div className="mainContainer">

            <h1 className="titleCon">My Color Palette Collection</h1>
            <div className="colorMainContainer">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" 
                        onChange={(e) => setText(e.target.value)} 
                        className="inputCon"
                        id = "color" 
                       placeholder="Enter valid hex color"
                    value = {text}
                    />
                </form>
                
                <div className="resultContainer">
                    
                    {color.map((c) => ( 
                        // <a href ="#">
                            <div
                             className="colorContainer" style={{backgroundColor: c.color}} key = {c.id}                
                                         onClick = {() => editColor(c.color,c.id)}
                        
                            > </div>

                        // </a>  
                    //     <div 
                    //         className="colorContainer" style={{backgroundColor: c.color}} key = {c.id}                
                    //                     onClick = {() => editColor(c.color,c.id)}
                    //     >
                    // {/* {c.color}  */}
                    //     </div>
                        
                    ))} 
                 
                </div>            

                {/* <ColorCollection  color={color} */}

                {/* />  */}
            </div>
        </div>
    )
}