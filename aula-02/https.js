const http = require('http')

const server = http.createServer((request, response) =>{
    const { method, statusCode, url } = request

    if (url === '/'){
        response.write('<div><h1>Hello from node</h1> <p>http server</p></div>')
        response.end
    }
})

server.listen(3000, 'localhost', () =>{
    console.log('server running on http://localhost:3000')
})