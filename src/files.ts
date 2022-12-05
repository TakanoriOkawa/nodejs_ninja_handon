import * as fs from 'fs' // 読み込む　ESModule出ないと型がつかない。

// ファイルの読み込み
fs.readFile("./docs/blog1.txt", (err, data) => { // 非同期処理
  if(err){
    console.log(err)
  }
  console.log(data) // ブッファと文字列 <Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64>
  console.log(data.toString()) // テキスト形式で見たい場合
})

console.log('終了')