const fs = require("fs");

const fileName = "large-file.txt";

// Create a text file with 50 lines
let content = "";

for (let i = 1; i <= 50; i++) {
    content += `This is line number ${i}\n`;
}

fs.writeFileSync(fileName, content);

console.log("Large file created successfully.");

// Read the file using a stream
const readStream = fs.createReadStream(fileName);

readStream.on("data", (chunk) => {
    console.log("Chunk received:", chunk.length, "bytes");
});

readStream.on("end", () => {
    console.log("Finished reading the file.");
});