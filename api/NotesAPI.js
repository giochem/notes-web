export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")
        // const user = JSON.parse(localStorage.getItem("notesapp-active"))

        // const note?sForUser = notes.filter(note => note.userId == user.id)

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }
    static getAllNotesForUser() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")
        const user = JSON.parse(localStorage.getItem("notesapp-active"))

        const notesForUser = notes.filter(note => note.userId == user.id)

        return notesForUser.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }
    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes()
        const existing = notes.find(note => note.id == noteToSave.id)
        if (existing) {
            existing.title = noteToSave.title
            existing.body = noteToSave.body
            existing.updated = new Date().toISOString()
        }
        else {
            const user = JSON.parse(localStorage.getItem("notesapp-active"))
            noteToSave.userId = user.id
            
            noteToSave.id = Math.floor(Math.random() * 1000000)
            noteToSave.updated = new Date().toISOString()
            notes.push(noteToSave)
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes))
    }
    static deleteNote(id){
        const notes = NotesAPI.getAllNotes()
        const newNotes = notes.filter(note => note.id != id)

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes))
    }
}