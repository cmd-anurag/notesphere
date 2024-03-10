const express = require('express');
const router = express.Router();
var fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator')




// [Create] ROUTE 1 - Add notes of a logged in user using : POST "/api/notes/addnote" login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({min: 1})
], async (req, res)=> {

    const errors = validationResult(req); // checking if there are any errors 
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
    const {title, description, tag} = req.body;

    const note = new Notes({
        title, description, tag, user: req.user.id
    })
    const savedNote = await note.save();
    res.json({savedNote})
    }
    catch (error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }
})


// [Read] ROUTE 2 - Route to fetch all the notes of a logged in user using : GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes', fetchUser, async (req, res)=> {

    try{
        const notes = await Notes.find({user: req.user.id});
        res.json({notes})
    }
    catch(error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }

})


// [Update] ROUTE 3 - Update a note of a logged in user using : PUT "/api/notes/updatenote" login required
router.put('/updatenote/:id', fetchUser, async (req, res)=> {

    try {
        const {title, description, tag} = req.body

        // creating a new note object and adding the given values if any
        const newNote = {};
        if(title) {newNote.title = title};
        if(description) {newNote.description = description}
        if(tag) {newNote.tag = tag}

        // find the note to be updated
        let note = await Notes.findById(req.params.id)
        if(!note) {
            return res.status(404).send("not found");
        }
        
        if(note.user.toString() !== req.user.id) {
            return res.status(401).send("unauthorised");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
        res.json(note);
    }
    catch(error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }

})


// [Delete] ROUTE 4 - Delete a note of a logged in user using : PUT "/api/notes/updatenote" login required
router.delete('/deletenote/:id', fetchUser, async(req, res)=> {

    try {
        // find the note to be deleted
        let note = await Notes.findById(req.params.id);
        if(!note) {
            return res.status(404).send("not found");
        }
        if(req.user.id !== note.user.toString()) {
            return res.status(404).send("unauthorised");
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({note});
    }
    catch(error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }

})

module.exports = router