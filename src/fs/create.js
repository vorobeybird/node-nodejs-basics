import fs from "fs";
import path from "path";

export const create = async (fileName) => {
  const filePath = path.join("./files/", fileName);

  await fs.access(filePath, function (error) {
    try {
      if (error) {
        fs.writeFile(filePath, "I am fresh and young", { flag: "wx" }, () =>
          console.log("File created")
        );
      } else {
        throw "FS operation failed";
      }
    } catch (e) {
      console.log(e);
    }
  });
};
