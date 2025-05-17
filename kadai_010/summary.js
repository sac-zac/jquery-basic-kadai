$(function() {
 // 文字色変化ボタンがクリックされた場合（赤色へ）
 $('#change-color').on('click', function(){
   $('#target').css('color', 'red');
 });

 // 文字内容変化ボタンがクリックされた場合（Hello!へ）
 $('#change-text').on('click', function(){
   $('#target').text('Hello!');
 }); 

 // フェードアウトボタンがクリックされた場合（文字非表示）
 $('#fade-out').on('click', function(){
   $('#target').fadeOut();
 }); 

 // フェードインボタンがクリックされた場合（文字再表示）
 $('#fade-in').on('click', function() {
   $('#target').fadeIn();
 });
});