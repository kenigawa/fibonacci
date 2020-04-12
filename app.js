'use strict';


//改善前のコード

// function fib(n) {
//     if (n === 0) {
//       return 0;
//     } else if (n === 1) {
//       return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }
//   const length = 40;
//   for (let i = 0; i <= length; i++) {
//     console.log(fib(i));
//   }

//改善後のコード
const memo = new Map();     //Mapオブジェクトの作成
memo.set(0, 0);
memo.set(1, 1);

function fib(n){
    if(memo.has(n)){       //memoが0か1のキーをsetされていたら
        return memo.get(n);
    } 
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);     //Mapに計算した値を格納する
    return value;
}
const length = 40;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}
