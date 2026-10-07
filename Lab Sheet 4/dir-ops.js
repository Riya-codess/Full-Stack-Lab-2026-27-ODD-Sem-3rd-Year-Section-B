const fs = require("fs");

const folderName = "uploads";

// Create uploads folder
fs.mkdir(folderName, { recursive: true }, (err) => {
    if (err) throw err;

    console.log("Uploads folder created successfully.");

    // Create 3 empty files
    fs.writeFile(`${folderName}/file1.txt`, "", (err) => {
        if (err) throw err;

        fs.writeFile(`${folderName}/file2.txt`, "", (err) => {
            if (err) throw err;

            fs.writeFile(`${folderName}/file3.txt`, "", (err) => {
                if (err) throw err;

                console.log("Three files created successfully.");

                // List all files
                fs.readdir(folderName, (err, files) => {
                    if (err) throw err;

                    console.log("\nFiles in uploads folder:");
                    console.log(files);

                    // Delete one file
                    fs.unlink(`${folderName}/file3.txt`, (err) => {
                        if (err) throw err;

                        console.log(
                            "\nfile3.txt deleted successfully."
                        );
                    });
                });
            });
        });
    });
});