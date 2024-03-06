const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = ',An online learning platform';
const updateFile = async (fileName, fileContent) => {
  fs.writeFile(fileName,fileContent)
  
};
updateFile(fileName,fileContent);

module.exports = updateFile;
