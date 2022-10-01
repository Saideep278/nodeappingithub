const f=require('fs')
const { argv } = require('process')
const yargs = require('yargs')
const notes = require('./notes.js')

//const v = require('./util')
//console.log(process.argv[2])


yargs.version('1.1.0')

//console.log(f.readFileSync('notes.json').toString()[0])


yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        tittle:{
            describe:'note tittle',
            demandOption:'true',
            type: 'string'
        },
        body:{
            describe:'note body',
            demandOption:'true',
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNotes(argv.tittle,argv.body)
        
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder:{
        tittle :{
            describe:'note tittle',
            demandOption:'true',
            type: 'string'
        }
        
    },
    handler : (argv)  => {
        notes.removeNotes(argv.tittle)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        tittle:{
            describe:'note tittle',
            demandOption:'true',
            type: 'string'
        }
    },
    handler: function (argv){
        notes.readNotes(argv.tittle)
    }
})

yargs.command({
    command : 'list',
    describe : 'list a note',
    handler : function(argv) {
        notes.listNotes()
    }
})


yargs.parse()
//console.log(yargs.argv)