/*
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    
    var fs = require('fs');
    path = require('path');

    export function crawl(dir){
        console.log('[+]',dir);
        var files = fs.readdirSync(dir);
        for(var x in files){
            var next = path.join(dir,files[x]);

            if(fs.lstatSync(next).isDirectory()==true){
                crawl(next);
            }
            else {
                console.log('\t',next);
            }
        }
    }



    } else {
    alert('The File APIs are not fully supported in this browser.');
  }
  */


/*
const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})
*/

export function wtf(){
    alert("WTF!");
}

export function cow(){
    console.log("Moooooooo!!!")
}

//crawl(__dirname);


