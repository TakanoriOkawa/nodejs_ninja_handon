// const fs = require('fs');
import * as fs from 'fs' // 読み込む　ESModule出ないと型がつかない。

fs.readFile("./docs/blog1.txt", (err, data) => {
  if(err){
    console.log(err)
  }
  console.log(data) // ブッファと文字列 <Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64>
  console.log(data.toString()) // テキスト形式で見たい場合
})

// ファイルの読み込み