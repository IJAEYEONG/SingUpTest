const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlStr =req.url
    const path = url.parse(req.url, true).pathname;
    
    let urlObj = url.parse(urlStr, true);
    if (req.method === 'GET' && path === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && path === '/signup') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const username = formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password');
            // 여기서는 간단히 콘솔에 출력할 것입니다.
            console.log(`사용자명: ${username}`);
            console.log(`이메일: ${email}`);
            console.log(`비밀번호: ${password}`);
            // 회원가입 성공 메시지 전송
            console.log(queryData);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('회원가입이 완료되었습니다.');
        });
    }else if(req.url === "/app.js") {
        const third = fs.readFileSync("app.js");
        res.statusCode=200;
        res.setHeader('Content-Type','text/javascript; charset=utf-8');
        res.write(third)
        res.end();
    }else if(req.url === "/names.js") {
        const test = fs.readFileSync("names.js");
        res.statusCode=200;
        res.setHeader('Content-Type','text/javascript; charset=utf-8');
        res.write(test)
        res.end();
    }else if(req.url ==="/style.css"){
        const css = fs.readFileSync("style.css");
        res.statusCode=200;
        res.setHeader('Content-Type','text/css; charset=utf-8');
        res.write(css)
        res.end();
    }
    else if(req.url === "/getElementID.js"){
        const css = fs.readFileSync("getElementID.js");
        res.statusCode=200;
        res.setHeader('Content-Type','text/javascript; charset=utf-8');
        res.write(css)
        res.end();
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
    console.log(req.url);
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:3000`);
});
