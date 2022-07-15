// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
     },
      speed
    );
    return false;
  });
  
  //wow.js
  new WOW().init()
  
  $(document).ready(function () {

    $('#js-form').submit(function (event) {
      var formData = $('#js-form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/hogehoge",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            
            $(".end-message").slideDown();
            $("#js-submit").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });
    
    $(function() {
      //始めにjQueryで送信ボタンを無効化する
      $('#js-submit').prop("disabled", true);
      
      //始めにjQueryで必須欄を加工する
      $('form input:required').each(function () {
          $(this).prev("label").addClass("required");
      });
      
      //入力欄の操作時
      $('form input:required').change(function () {
          //必須項目が空かどうかフラグ
          let flag = true;
          //必須項目をひとつずつチェック
          $('form input:required').each(function(e) {
              //もし必須項目が空なら
              if ($('form input:required').eq(e).val() === "") {
                  flag = false;
              }
          });
          //全て埋まっていたら
          if (flag) {
              //送信ボタンを復活
              $('#js-submit').prop("disabled", false);
          }
          else {
              //送信ボタンを閉じる
              $('#js-submit').prop("disabled", true);
          }
      });
  });


//drawer.js
$(document).ready(function() {
	 $('.drawer').drawer();
});