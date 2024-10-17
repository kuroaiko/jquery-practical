$(function() {
  // slickを利用してカルーセルを実装する
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay:  true,
    fade: true,
    speed: 1500,
    pauseOnHover:false
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a, .item img').hover(
    function() {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function() {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える
  $(window).scroll(function() {
    // 画面のスクロール量が100px以上であれば、ボタンを表示する
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
  
  //  ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
  $('a[href^="#"]').click(function() {
    const speed = 500;
    const href = $(this).attr('href');
    let target;
    if (href == '#') {
      target = $('html');
    } else {
      target = $(href);
    }
    const position = target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  //  スクロールしたときにセクションをフェードインさせる 
  $(window).scroll(function() {
    // スクロール量を取得
    const scrollAmount = $(window).scrollTop();
    // 画面の高さを取得
    const windowHeight = $(window).height();
    $('section').each(function() {
      // それぞれのsectionまでの高さを取得
      const position = $(this).offset().top;
      // 条件式に合致する場合はis-activeを付与
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function() {
    // クリックした画像(img)のsrc属性をimgSrcの変数に設定する処理
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    // big-img(img)のsrc属性を、imgSrcに書き換える処理
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    // モーダルを表示させる処理
    $('.modal').fadeIn();
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function() {
    $('.modal').fadeOut();
  });
});
