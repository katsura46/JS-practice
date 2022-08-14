//問題文
const question = 'ゲーム史上、最も売れたゲーム機はどれ？';
//選択肢
const answers = [
'スーパーファミコン',
'プレイステーション２',
'任天堂スイッチ',
'ニンテンドーDS'
];
//正解（答え）
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//定数の文字列をHTMLに反映させる、クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;

  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent ){
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}