// requireした時点で、対象ファイルを実行される。
const {people, ages} = require('./people'); // Moduleの読み込み

console.log(people, ages);


// OSのプラットフォームを表示 ホームディレクトリを表示
const os = require('os');
console.log(os.platform(), os.homedir());
