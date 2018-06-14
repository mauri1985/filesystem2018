/*
    // Great success! All the File APIs are supported.
    
    

    export function crawl(){
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            
        
        
        var fs = require('fs');
        path = require('path');


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
        
        

        
        
        
        } else {
            alert('The File APIs are not fully supported in this browser.');
        }
        
        

    }
    */