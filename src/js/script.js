
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // setting
  $(function () {
    $(window).on("scroll touchmove", function () { //スクロール中に判断する
      $(".kore").stop(); //アニメーションしている場合、アニメーションを強制停止
      $(".kore").css('display', 'none').delay(500).fadeIn('fast');
      //スクロール中は非表示にして、500ミリ秒遅らせて再び表示
    });
  });
  // /setting
});
