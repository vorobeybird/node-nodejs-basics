import fs from 'fs';

export const list = async () => {
    // Write your code here
      
    try {
        fs.readdir('./files', (err, files) => {
            if (err) {
                throw "FS operation failed";
            }
            console.log(files);
        })

    } catch (e) {
        throw "FS operation failed";
    }

};