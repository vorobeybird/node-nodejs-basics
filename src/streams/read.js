import fs from "fs";

export const read = async () => {
  // Write your code here
  const rr = fs.createReadStream("./files/fileToRead.txt");
  rr.on("readable", () => {
    let streamLine = rr.read();
    if (streamLine) {
      process.stdout.write(streamLine);
    }
  });
  rr.on("end", () => {
    console.log("\nend");
  });
};

read();
