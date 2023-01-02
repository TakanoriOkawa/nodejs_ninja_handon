// console.log("value!");

// *************コメント化解除①**************
// // 非同期処理が複数あった場合、それらを連続して実行したいとすると以下のようなコードになる
// function sleep(cb: (val:number) => void, val: number) {
//   setTimeout(() => {
//     console.log(val++)
//     cb(val);
//   },1000)
// }

// sleep(function(val:number) {
//   sleep(function(val:number) {
//     sleep(function(val:number) {

//     },val)
//   },val)
// },0);


// *************コメント化解除②**************

// new Promise((resolve,reject) => {
//   /*  同期処理される
//       同期・非同期処理に関わらず、ここで処理を待った後で、
//       成功した場合はthen
//       失敗した場合はcatchに記述を移す */
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res => res.json())
//   .then(result => { 
//     resolve("成功");
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err)
//     reject("失敗");
//   })
//   console.log("同期で実行される")
// }).then((data) => {
//   console.log("第一引数のコールバック関数内で処理が成功した結果:" + data);
//   console.log("非同期で実行される")
// }).catch(err => {
//   console.log("第一引数のコールバック関数内で処理が成功した結果:" + err);
//   console.log("非同期で実行される")
// }).finally(() => {
//   console.log("終了")
// })

// console.log("done script")


// *************コメント化解除③**************
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("成功")
//   },2000)
// })

// promise.then(data => console.log(data)); // promiseからresolveかrejectが来るのを待って、最終的にコンソール表示をしている


function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3秒待つ")
      resolve("成功")
    },3000)
  });
}

// 即時関数
(async () => {
  const res = await sleep();
  console.log(res)
})();