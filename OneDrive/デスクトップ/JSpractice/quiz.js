const quiz = [
  {
    //問題文
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    //選択肢
    answers:  [
      'スーパーファミコン',
      'プレイステーション２',
      '任天堂スイッチ',
      'ニンテンドーDS'
    ],
    //正解（答え）
    correct: 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    //選択肢
    answers:  [
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    //正解（答え）
    correct: 'MOTHER2'
  },{
    question: 'ファイナルファンタジーⅩの主人公の名前は？',
    //選択肢
    answers:  [
      'セシル',
      'クラウド',
      'スコール',
      'ティーダ'
    ],
    //正解（答え）
    correct: 'ティーダ'
  },{
    question: 'Apple社では無い物は？',
    //選択肢
    answers:  [
      'iphone',
      'ipad',
      'Mac',
      'Windows'
    ],
    //正解（答え）
    correct: 'Windows'
  },{
    question: '中国地方でない県は？',
    //選択肢
    answers:  [
      '岡山県',
      '広島県',
      '兵庫県',
      '山口県'
    ],
    //正解（答え）
    correct: '兵庫県'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//定数の文字列をHTMLに反映させる、クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;

  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題以￥がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です。');
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