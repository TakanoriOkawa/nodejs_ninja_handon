console.log("value!");

// 非同期処理が複数あった場合、それらを連続して実行したいとすると以下のようなコードになる
function sleep(cb: (val:number) => void, val: number) {
  setTimeout(() => {
    console.log(val++)
    cb(val);
  },1000)
}

sleep(function(val:number) {
  sleep(function(val:number) {
    sleep(function(val:number) {

    },val)
  },val)
},0);