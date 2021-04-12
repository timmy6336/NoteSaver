const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

//Create add command
yargs.command(
{
    command: 'add',
    describe: 'Add a new note',
    builder: 
    {
        title:
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:
        {
            describe: 'contents of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command(
{
    command: 'remove',
    describe: 'Remove a note',
    builder: 
    {
        title:
        {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
    }
})

//List notes command

yargs.command(
{
    command: 'list',
    describe: 'Lists all notes',
    handler()
    {
        notes.getNotes()
    }
})

//Read notes command

yargs.command(
{
    command: 'read',
    describe: 'read a note',
    builder:
    {
        title:
        {
            describe: 'Title of list to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argsv)
    {
        notes.readNote(argsv.title)
    }
})

yargs.parse()