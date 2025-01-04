$(function () {
  // スムーススクロール　パララックス効果
  // ページ内のリンクをクリック時に動作
  $('a[href^="#"]').click(function () {
    // リンクを取得
    let href = $(this).attr('href');
    // ジャンプ先のID名をセット
    let target = $(href == '#' || href == '' ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // スクロール速度６００/秒と設定する
    $('html,body').animate({ scrollTop: position }, 600, 'swing');
  });
});
