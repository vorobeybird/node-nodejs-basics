import fs from 'fs';

const writableStream = fs.createWriteStream('./files/fileToWrite.txt');

export const write = async () => {
    process.stdin.on('data', chunk => {
        writableStream.write(chunk);
    })
    process.stdin.on('end', ()=> {
        process.exit();
    })
};

write();