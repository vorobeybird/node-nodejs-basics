import fs from "fs";

export const read = async () => {
  // Write your code here\
  const filePath = "./files/fileToRead.txt";

  fs.open(filePath, "r", (err, fd) => {
    if (err) {
      if (err.code === "ENOENT") {
        throw "FS operation failed";
      }

      throw err;
    }

    try {
      fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
          throw "FS operation failed";
        }
        console.log(data);
      });
    } finally {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};
