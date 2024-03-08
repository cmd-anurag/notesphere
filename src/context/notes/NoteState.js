
import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    
    const notesInitial = [
          {
            "_id": "65e8a134580ca19362ad727dc1b",
            "user": "65e89996a4de18bbcee68281",
            "title": "note heading",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae commodi omnis ipsum quaerat? Omnis vero magnam facere, fugit quaerat incidunt, sit optio, laboriosam possimus repudiandae iste quibusdam modi eaque.",
            "tag": "note tag",
            "date": "2024-03-06T17:01:52.991Z",
            "__v": 0
          },
          {
            "_id": "45",
            "user": "65e89996a4de18bbcee68281",
            "title": "My Note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae commodi omnis ipsum quaerat? Omnis vero magnam facere, fugit quaerat incidunt, sit optio, laboriosam possimus repudiandae iste quibusdam modi eaque.",
            "tag": "development",
            "date": "2024-03-08T15:35:51.569Z",
            "__v": 0
          },
          {
            "_id": "65eb307a33228db691af65606",
            "user": "65e89996a4de18bbcee68281",
            "title": "My Note xyz",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae commodi omnis ipsum quaerat? Omnis vero magnam facere, fugit quaerat incidunt, sit optio, laboriosam possimus repudiandae iste quibusdam modi eaque.",
            "tag": "development",
            "date": "2024-03-08T15:36:26.526Z",
            "__v": 0
          },
          {
            "_id": "65eb307a32281db691af65606",
            "user": "65e89996a4de18bbcee68281",
            "title": "My Note xyz",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae commodi omnis ipsum quaerat? Omnis vero magnam facere, fugit quaerat incidunt, sit optio, laboriosam possimus repudiandae iste quibusdam modi eaque.",
            "tag": "development",
            "date": "2024-03-08T15:36:26.526Z",
            "__v": 0
          },
          {
            "_id": "65eb307a3228d4b691af65606",
            "user": "65e89996a4de18bbcee68281",
            "title": "My Note xyz",
            "description": "This is my fourth note",
            "tag": "development",
            "date": "2024-03-08T15:36:26.526Z",
            "__v": 0
          },
          {
            "_id": "65eb307a3228db5691af65606",
            "user": "65e89996a4de18bbcee68281",
            "title": "My Note xyz",
            "description": "This is my fourth note",
            "tag": "development",
            "date": "2024-03-08T15:36:26.526Z",
            "__v": 0
          }
        ]

      const[notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
