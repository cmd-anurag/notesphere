
import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    
    const s1 = {
        "name":"test",
        "age": 19
    }
    const [state, setState] = useState(s1);


    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState