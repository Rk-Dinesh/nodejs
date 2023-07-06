const http = require('http')
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });
    let filename = +new Date();
    fs.writeFile(`${filename}.txt`, `Time is ${new Date()} `, 'utf-8', () => {
        fs.readFile(`${filename}.txt`, 'utf-8', (error, data) => {
            if (error)
                console.log(error);
            else
                res.end(data)

        })
    })

})

server.listen(8000, () => console.log("Server is listening port 8000"))