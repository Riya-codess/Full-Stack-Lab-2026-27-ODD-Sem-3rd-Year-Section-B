const http = require("http");
const url = require("url");

const students = [
    { id: 1, name: "Riya Choudhary", course: "B.Tech CSE" },
    { id: 2, name: "Aarav Sharma", course: "B.Tech CSE" },
    { id: 3, name: "Priya Singh", course: "B.Tech CSE" }
];

const server = http.createServer((req, res) => {

    // Parse URL and query string
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // GET /
    if (req.method === "GET" && pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Student Server</h1>");
    }

    // GET /students
    else if (req.method === "GET" && pathname === "/students") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    }

    // GET /students/:id
    else if (
        req.method === "GET" &&
        pathname.startsWith("/students/")
    ) {
        const id = parseInt(pathname.split("/")[2]);

        const student = students.find(
            (student) => student.id === id
        );

        if (student) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                error: "Student not found"
            }));
        }
    }

    // GET /search?keyword=node
    else if (req.method === "GET" && pathname === "/search") {
        const keyword = query.keyword || "";

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Search keyword: ${keyword}`);
    }

    // Any other route
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});