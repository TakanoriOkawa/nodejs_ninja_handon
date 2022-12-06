import * as fs from 'fs' // 読み込む　ESModule出ないと型がつかない。

// ファイルの読み込み
fs.readFile("./docs/blog1.txt", (err, data) => { // 非同期処理
  if(err){
    console.log(err)
  }
  console.log(data) // ブッファと文字列 <Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64>
  console.log(data.toString()) // テキスト形式で見たい場合
})

// ファイルへの書き込み
fs.writeFile("./docs/blog1.txt", "hello update", () => { // blog2.txtが存在しない場合、作成される
  console.log("書き込み終了1")
})

fs.writeFile("./docs/blog2.txt", "hello coding", () => { // blog2.txtが存在しない場合、作成される
  console.log("書き込み終了2")
})

console.log('終了')