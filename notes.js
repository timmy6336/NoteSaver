const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>
{
    var msg = chalk.yellow('I cant belive youve done this')
    const notes = loadNotes()
    if(notes.length === 0)
    {
        msg = chalk.red.inverse("Error: No Notes Saved!")
    }
    else
    {
        console.log(chalk.blue.inverse("Your Notes"))
        notes.forEach(element => console.log(element.title))
        msg = chalk.green.inverse("Listing Succesful")
    }
    console.log(msg)
}

const addNote = (title,body) =>
{
    var msg = chalk.yellow('I cant belive youve done this')
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote)
    {
          notes.push(
            {
                title: title,
                body: body
            })
        saveNotes(notes)
        msg = chalk.green.inverse('New note added!')
    }
    else
    {
        msg = chalk.red.inverse('Error: Note title taken!')
    }
    console.log(msg)
}

const removeNote = (title) =>
{
    var msg = chalk.yellow('I cant belive youve done this')
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title != title)
    
    if(notes.length === newNotes.length)
    {
        msg = chalk.red.inverse("Error: No note with that title exists!")
    }
    else
    {
        msg = chalk.green.inverse("Note removed!")
        saveNotes(newNotes)
    }
    console.log(msg)
}

const readNote = (title) =>
{
    var msg = chalk.yellow('I cant belive youve done this')
    const notes = loadNotes()
    const goalNote = notes.find((note) => note.title === title)

    if(!goalNote)
    {
        console.log(chalk.red.inverse("Error: Note Dose Not Exist!"))
    }
    else
    {
        console.log(chalk.inverse(goalNote.title))
        console.log(goalNote.body)
    }
}
const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('savedNotes.json',dataJSON)
}
const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync('savedNotes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}