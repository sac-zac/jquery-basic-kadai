$(function () {
 // class属性がbtnの要素がクリックされた時の処理
 $('.btn').on('click', function () {
  // テキストボックスにメッセージを表示
  $('.text-box').val('クリックしました！');
 });
});