// JavaScript Document
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
  })
  wow.init();
  
  // 锚点点击
  $(".sub-menu>.main>.sub-nav>.items>a").click(function(){
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({scrollTop: targetOffset},1500);
              return false;
          }
      }
  });
  
  var hideTarget = ''; //点击遮罩需要隐藏的对象
  //手机端点击展开导航
  $(".m-header .m-nav-btn").click(function(){
      $(".m-header .m-fixed-search").slideUp();
      $(".mask").fadeOut();
      $(".m-header .m-nav").slideToggle();
      $(".mask").toggle();
      hideTarget = 'nav';
  });
  //手机端点击展开搜索
  $(".m-header .m-search-btn").click(function(){
      $(".m-header .m-nav").slideUp();
      $(".mask").fadeOut();
      $(".m-header .m-fixed-search").slideDown();
      $(".mask").fadeIn();
      hideTarget = 'search';
  });
  //手机端点击一级栏目展开二级
  $(".m-nav .one i").click(function(){
      $(this).toggleClass("open");
      $(".m-nav .one i").not($(this)).removeClass("open");
      $(this).parents(".one").next(".two").slideToggle();
      $(".two").not($(this).parents(".one").next(".two")).slideUp();
  });
  //点击手机搜索关闭
  $(".m-fixed-search .close").click(function(){
      $(".m-header .m-fixed-search").slideUp();
      $(".mask").fadeOut();
  });
  //点击遮罩隐藏
  function hideMe(){
      if(hideTarget == 'nav'){
          $(".m-header .m-nav").slideUp();
          $(".mask").fadeOut();
      }else if(hideTarget == 'search'){
          $(".m-header .m-fixed-search").slideUp();
          $(".mask").fadeOut();
      }
  };
  
  //搜索
  $(".select-fun >span").click(function(){
      $(".select-fun .sub").slideToggle();
  });
  $(".select-fun .sub span").click(function(){
      $(".select-fun .sub").slideUp();
      $(".select-fun input").val($(this).text());
      $(".select-fun >span").text($(this).text());
      var text = $(this).text();
      var table = 0;
      if(text == '全部'){
          table = 0;
      }
      if(text == '新闻'){
          table = 1;
      }
      if(text == '产品'){
          table = 2;
      }
      $("#table").val(table);
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
  });
  
  