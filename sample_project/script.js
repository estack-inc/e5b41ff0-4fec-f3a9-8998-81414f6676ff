// カウンターアプリのJavaScript
// 注意：このコードには意図的なバグが含まれています

let counter = 0;

// DOM要素の取得
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// カウンターの値を更新する関数
function updateDisplay() {
    counterDisplay.textContent = counter;
}

// インクリメント関数（バグあり：カウンターが増えない）
function increment() {
    counter = counter;  // バグ：値が変更されない
    updateDisplay();
}

// デクリメント関数（バグあり：制限がない）
function decrement() {
    counter = counter - 1;  // バグ：マイナスになっても止まらない
    updateDisplay();
}

// イベントリスナーの設定（バグあり：関数が実行されてしまう）
incrementBtn.addEventListener('click', increment());  // バグ：関数を即実行してしまっている
decrementBtn.addEventListener('click', decrement);

// 初期表示
updateDisplay();

// 追加機能の要望：
// 1. リセットボタンを追加してカウンターを0に戻す機能
// 2. カウンターが10に達したら祝福メッセージを表示
// 3. マイナスの値にならないようにする
// 4. キーボードショートカット（↑キーで増加、↓キーで減少）