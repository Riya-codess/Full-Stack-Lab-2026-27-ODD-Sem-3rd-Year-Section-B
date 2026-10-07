const express = require("express");

const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express Lab Running");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Riya Choudhary",
        rollNumber: 51
    });
});

app.get("/courses", (req, res) => {
    res.json([
        "Full Stack Web Development",
        "Data Science",
        "Machine Learning"
    ]);
});

app.post("/echo", (req, res) => {
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});