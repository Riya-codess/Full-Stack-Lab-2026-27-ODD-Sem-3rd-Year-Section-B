const fs = require("fs");

const fileName = "student.txt";

// Create and write student details
fs.writeFile(
    fileName,
    "Name: Riya Choudhary\nRoll Number: 51",
    (err) => {
        if (err) throw err;

        console.log("Student details written successfully.");

        // Append course name
        fs.appendFile(
            fileName,
            "\nCourse: B.Tech Computer Science",
            (err) => {
                if (err) throw err;

                console.log("Course name appended successfully.");

                // Read the complete file
                fs.readFile(fileName, "utf8", (err, data) => {
                    if (err) throw err;

                    console.log("\nFile Content:");
                    console.log(data);

                    // Rename the file
                    fs.rename(
                        fileName,
                        "profile.txt",
                        (err) => {
                            if (err) throw err;

                            console.log(
                                "\nFile renamed from student.txt to profile.txt successfully."
                            );
                        }
                    );
                });
            }
        );
    }
);