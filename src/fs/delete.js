import fs from "fs";
import path from "path";

export const remove = async (fileToRemove) => {
    // Write your code here 
    const filePath = path.join('./files/' + fileToRemove);
    console.log(filePath);
    fs.unlink(filePath, (err) => {
        if (err) throw "FS operation failed";
        console.log('path/file.txt was deleted');
      });
};
