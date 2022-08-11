// 変数
let kei = '変数_Hello World!';
console.log(kei);
kei = 'こんにちは！';
console.log(kei);

// 定数
const kei2 = '定数_Hello World!';
console.log(kei2);

// 配列
let inoki = ['いーち','にーい','さーん','だー！！'];
console.log(inoki); //すべて
console.log(inoki[1]); //配列指定

// ループ文と配列を組み合わせる
let index = 0;
while(index < inoki.length){
  //繰り返したい命令
  console.log(inoki[index]);
  index++;
}

// // if else文
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...');
// }

// 関数
const test = (arg) => {
  // ここに実行した命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...');
  }
};
// argに()内の数値を代入
test(5);
test(3);

// オブジェクト
const kei3 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

console.log(kei3); // すべて
console.log(kei3.color); // color
console.log(kei3.goToilet()); // goToilet