import fs from "fs";
import path from "path";

export const create = async (fileName) => {
  const filePath = path.join("./files/", fileName);

  fs.open(filePath, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error("FS operation failed");
        return;
      }
  
      throw "FS operation failed";
    }
  
    try {
        fs.writeFile(filePath, "I am fresh and young", { flag: "wx" }, () =>
        console.log("File created")
      );
    } finally {
        fs.close(fd, (err) => {
        if (err) throw "FS operation failed";
      });
    }
  });

};
