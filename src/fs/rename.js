import fs from "fs";

export const rename = async (currentName, targetName) => {
  // Write your code here
  try {
    await fs.access("./files/" + targetName, (err) => {
      if (!err) throw "FS operation failed";
    });

    await fs.rename(
      "./files/" + currentName,
      "./files/" + targetName,
      (err) => {
        if (err) {
          throw "FS operation failed";
        }
        console.log("FS operation succeed");
      }
    );
  } catch (err) {
    console.error("FS operation failed");
  }
};
