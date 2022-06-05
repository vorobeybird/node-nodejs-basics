import crypto from "crypto";
import fs from "fs";

export const calculateHash = async () => {
  // Write your code here
  const hashSum = crypto.createHash("sha256");
  const input = fs.createReadStream("./files/fileToCalculateHashFor.txt");
  input.on("readable", () => {
    const data = input.read();
    if (data) hashSum.update(data);
    else {
      console.log(`${hashSum.digest("hex")}`);
    }
  });
};

calculateHash();
