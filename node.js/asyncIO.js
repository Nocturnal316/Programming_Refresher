//Async calls allow us to continue working although we  may be in a middle of a job
var  filesys = require('fs')
var lines = undefined
//return a buffer of the file

//or  filesys.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


function readMe(err,fileData){
    lines = fileData.split('\n').length - 1
    console.log(lines)
    return 2

    //how do you return values in call backs?
}


 lines = filesys.readFile(process.argv[2],'utf8',readMe)
 console.log(lines)
