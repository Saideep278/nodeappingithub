const fs = require('fs')


const readNotes = function (tittle) {
    const notes = loadNotes()
    notes.forEach((note)=>{
        if (note.tittle === tittle) {
            console.log("Tittle : " + note.tittle)
            console.log("Body   : " + note.body)
        }
    })

}

const listNotes = function (tittle) {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.tittle)
    });

}





const removeNotes = function (tittle) {
    const notes = loadNotes()

    const notestoKeep = notes.filter( ( note ) =>{
        return note.tittle !== tittle
    })

    saveNotes(notestoKeep)
}




const addNotes = function (tittle,body) {

    const notes = loadNotes()

    const duplicatedNOtes = notes.filter( function(note) {
        return note.tittle === tittle
    })

    if (duplicatedNOtes.length === 0 ){  

        notes.push({
            tittle:tittle,
            body:body
        })
        saveNotes(notes)
        console.log("Notes added with tittle "+tittle)
    } else{
        console.log("Tittle already taken")
    }
}

const saveNotes = function (notes) {
    const dt = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dt)
}

const loadNotes = function () {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const data = databuffer.toString()
        
        return JSON.parse(data)
    } catch(e) {
        return []
    }
}


module.exports = {
    readNotes: readNotes,
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}




