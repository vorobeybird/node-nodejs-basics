import fs from "fs";
import path from "path";

export const copy = async (selectedDir, copyDir) => {
  // Write your code here
  await fs.access(copyDir, async function (error) {
    try {
      if (error) {
        await fs.mkdir(copyDir, { recursive: true }, (err) => {
          if (err) throw err;
        });

        await fs.readdir(selectedDir, (err, files) => {
          if (err) {
            throw err;
          }
          for (let file in files) {
            fs.copyFile(
              path.join("./", selectedDir, "/", files[file]),
              path.join("./", copyDir, "/", files[file]),
              (err) => {
                if (err) throw err;
              }
            );
          }
        });
      } else {
        throw "Operation Failed";
      }
    } catch (e) {
      console.log("error: ", e);
    }
  });
};
