import * as http from 'http';
import * as fs from 'fs';

type Request = http.IncomingMessage
type Response = http.ServerResponse

const server = http.createServer((req: Request ,res: Response ) => {
  console.log(req.url, req.method) // リクエストのURLとHTTPメソッドを取得

  
  
  // htmlを返却する設定
  res.setHeader('Content-Type', 'text/html');

  // ルーティング設定
  let path = './public/views/';

  switch(req.url){
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  console.log(path);

  // ルートディレクトリからのパスを指定
  fs.readFile(path, (err: any, data: any) => {
    if(err) {
      console.log(err);
      res.end();
    }else {
      res.end(data)
    }
  })
});

server.listen(3000, 'localhost', () => {
  console.log("listening for requests on port 3000");
})
