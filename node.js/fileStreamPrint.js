
// a Way to import a modfule
var  filesys = require('fs')

//return a buffer of the file

//or  filesys.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
var fileBuffer = filesys.readFileSync(process.argv[2])


var stringedFile = fileBuffer.toString()
var lineSplits = stringedFile.split("\n")
console.log(lineSplits.length-1)
