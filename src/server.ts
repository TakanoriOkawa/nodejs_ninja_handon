import * as http from 'http';
import * as fs from 'fs';

import * as _ from 'lodash';

type Request = http.IncomingMessage
type Response = http.ServerResponse

const server = http.createServer((req: Request ,res: Response ) => {
  console.log(req.url, req.method) // リクエストのURLとHTTPメソッドを取得

  // lodash
  const num = _.random(0, 20);
  console.log(num)
  
  // htmlを返却する設定
  res.setHeader('Content-Type', 'text/html');

  // ルーティング設定
  let path = './public/views/';

  switch(req.url){
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    // about-meになったらリダイレクト処理を加える
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
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
