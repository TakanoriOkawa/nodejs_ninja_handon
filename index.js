// Global Objectの学習

console.log(global)

// 遅延実行
setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int); // 繰り返し処理 停止
}, 3000)


// 繰り返し実行
const int = setInterval(() => {
  console.log('in the interval');
},1000)


// 現在のディレクトまでの絶対パスを取得
console.log(__dirname);

// ファイル名までを取得
console.log(__filename);
