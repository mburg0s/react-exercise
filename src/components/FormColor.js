import {useContext, useState} from 'react'
import { store } from './Provider'
import ColorCollection from './ColorCollection'
import {currentColor, currentID} from './ColorCollection'

export default function FormColor() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    const color = globalState.state.color 

    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        console.log(dispatch.action)
        const validC = isValidColor(text) 
        // debugger
        console.log(currentColor, currentID)
        // debugger
        if ((validC) && (currentColor ==='')) {
            dispatch({type: 'ADD_COLOR', payload: text})
            setText('')
        }
        else { if (validC && currentColor !== '') {
            console.log(text, 'color')
            dispatch({type: 'EDIT_COLOR', payload: currentID})
            setText('')
            // if (text === '') {
                // dispatch({type: 'ADD_COLOR', payload: text})

            // }
            // dispatch({type: 'ADD_COLOR',)
            // currentColor = null
            // currentID =''


        } else { if (!validC) {
            alert('Invalid color')
            } 
        }  
        }    
   
    }

    function isValidColor(str) {
        return str.match(/^#[a-f0-9]{6}$/i) !== null;
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
                
                <ColorCollection  color={color}

                /> 
                </div>
        </div>
    )
}