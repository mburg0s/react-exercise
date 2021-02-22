import { createContext, useReducer } from 'react'
// import editColor from './Provider'

const initialState = {color: []};
export const store = createContext(initialState);
const { Provider } = store;

const id = () => Math.random().toString() + '-' + Math.random().toString()
function todoReducer(state, action){
    switch(action.type) {
    
        case 'ADD_COLOR':
            const addC = [...state.color,{id: id(), color: action.payload}]
            console.log(state)   

            return {...state, color: addC}
        case 'EDIT_COLOR':
            const newColor = state.color.map(item => {
                if (item.id === action.payload) {
                   const newC= {...item, color: document.querySelector('#color').value}

                //    console.log(editColor,'color')
                   console.log(newC,'newc')
                    return newC
                } 

                return item
            })
            console.log(newColor, 'newcolor')
            return {...state, color: newColor}


        default:
          throw new Error()
      };

}

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(todoReducer, initialState) 
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export default StateProvider 