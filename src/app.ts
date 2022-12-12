// const express = require('express');
import * as express from 'express';
import path = require('path');

const app = express();

app.listen(3000)


// ミドルウェアの使い方
// 必ず実行される・nextが無いので次の処理へ行かないので注意
app.use((req, res, next) => {
  console.log('new request made');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
  next();
})

const options = {
  root: __dirname,
  headers: {
    'x-timestamp': Date.now()
  }
}

app.get('/', (req, res) => {
  res.set('content-type', 'text/html')
  // 公式
  // https://expressjs.com/ja/api.html#res.sendFile
  // 第二引数でオプションを指定できる。
  res.sendFile('./views/index.html', options);
});


app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', options)
})

// リダイレクト処理
app.get('/about-us', (req,res) => {
  res.redirect('/about')
})

// ミドルウェア関数
// getリクエストがあった場合、処理を上から見ていき
// 全てのURLに一致しない場合、以下が実行される
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', options)
})