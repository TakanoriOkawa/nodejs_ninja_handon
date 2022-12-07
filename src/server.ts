import * as http from 'http';

const server = http.createServer((req ,res ) => {
  console.log('request made')
  console.log(req.url, req.method) // リクエストのURLとHTTPメソッドを取得

  // プレーンなテキストをブラウザに返す設定
  res.setHeader('Content-Type', 'text/plain');

  // 文字列を返却
  res.write('hello nodeJs');

  // 終了
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log("listening for requests on port 3000");
})
