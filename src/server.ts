import * as http from 'http';

const server = http.createServer((req ,res ) => {
  console.log('request made')
  console.log(req.url, req.method) // リクエストのURLとHTTPメソッドを取得
});

server.listen(3000, 'localhost', () => {
  console.log("listening for requests on port 3000");
})
