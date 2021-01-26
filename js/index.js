var http = require('http');
var fs = require('fs');
var firebase = require('./firebase_config');

http.createServer((rq, rs) => {
    if (rq.url == "/on/" && rq.method == "GET") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                rs.writeHead(404, {
                    "Content-Type": "text/html"
                });
                rs.write("404.html");
                rs.end();
            }
            rs.writeHead(200, {
                "Content-Type": "text/html"
            });
            rs.write(data);
            rs.end();

            firebase.database().ref('user/data').set({
                status: "on"
            });

        });
    }

    if (rq.url == "/off/" && rq.method == "GET") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                rs.writeHead(404, {
                    "Content-Type": "text/html"
                });
                rs.write("404.html");
                rs.end();
            }
            rs.writeHead(200, {
                "Content-Type": "text/html"
            });
            rs.write(data);
            rs.end();

            firebase.database().ref('user/data').set({
                status: "off"
            });

        });
    }

}).listen(8080);
console.log('it runs in http://localhost:8080');