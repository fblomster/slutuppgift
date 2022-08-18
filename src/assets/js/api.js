import http from "http";

const server = http.createServer(apiHandleRequest);

server.listen(4000);

function apiHandleRequest(request, response) {
  console.log({
    request,
    response,
  });
}
