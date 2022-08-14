//リファクタリング前

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

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[0].textContent ){
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
});

$button[1].addEventListener('click', () => {
  if(correct === document.getElementsByTagName[1].textContent ){
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
});
$button[2].addEventListener('click', () => {
  if(correct === document.getElementsByTagName[2].textContent ){
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
});
$button[3].addEventListener('click', () => {
  if(correct === document.getElementsByTagName[3].textContent ){
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
});