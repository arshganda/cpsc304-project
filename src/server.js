var http = require('http');
var port = 8080;
function handleRequest(request, response) {
    response.end('Does this shit work?' + request.url);
}
var server = http.createServer(handleRequest);
server.listen(port, function () {
    console.log('please tell me this shit works fr');
});
//# sourceMappingURL=server.js.map