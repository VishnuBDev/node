const {readFile, writeFile} = require('fs');
console.log("start read")

readFile('text1.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
});

console.log("write begin1")
    writeFile('text2.txt',"This is the text file being written to text2.txt which do not exist now",{flag:'a'},(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result,"write inside 1")
    }
        );

        console.log("end")