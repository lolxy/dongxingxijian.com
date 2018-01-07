<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
	<html>
	<head>
		<title><?php echo ($site_seo_title); ?> <?php echo ($site_name); ?></title>
		<meta name="keywords" content="<?php echo ($site_seo_keywords); ?>" />
		<meta name="description" content="<?php echo ($site_seo_description); ?>">
		<link rel="stylesheet" href="/themes/dongxingxijian/Public/assets/css/swiper.min.css">
			<?php  function _sp_helloworld(){ echo "hello ThinkCMF!"; } function _sp_helloworld2(){ echo "hello ThinkCMF2!"; } function _sp_helloworld3(){ echo "hello ThinkCMF3!"; } ?>
	<?php $portal_index_lastnews="1,2"; $portal_hot_articles="1,2"; $portal_last_post="1,2"; $tmpl=sp_get_theme_path(); $default_home_slides=array( array( "slide_name"=>"ThinkCMFX2.2.0发布啦！", "slide_pic"=>$tmpl."Public/assets/images/demo/1.jpg", "slide_url"=>"", ), array( "slide_name"=>"ThinkCMFX2.2.0发布啦！", "slide_pic"=>$tmpl."Public/assets/images/demo/2.jpg", "slide_url"=>"", ), array( "slide_name"=>"ThinkCMFX2.2.0发布啦！", "slide_pic"=>$tmpl."Public/assets/images/demo/3.jpg", "slide_url"=>"", ), ); ?>
<meta name="author" content="hujianying(604749526@qq.com)">
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- Set render engine for 360 browser -->
    <meta name="renderer" content="webkit">
   	<!-- No Baidu Siteapp-->
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
		<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="black" name="apple-mobile-web-app-status-bar-style" />
<meta content="telephone=no" name="format-detection" />

    <!-- HTML5 shim for IE8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->
	<link rel="icon" href="/themes/dongxingxijian/Public/assets/images/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/themes/dongxingxijian/Public/assets/images/favicon.ico" type="image/x-icon">
	<link href="/themes/dongxingxijian/Public/assets/css/style.css" rel="stylesheet">

	</head>
<body>
<?php echo hook('body_start');?>
<!-- 头部公共部分 -->
<header id="header">
  <div class="logo">
    <a href="/">
      <img src="/themes/dongxingxijian/Public/assets/images/logo.png" alt="东形西见" class="img-responsive"/>
    </a>
  </div>
  <div class="title">首页</div>
  <div class="search-wrap">
    <form method="post" action="<?php echo U('portal/search/index');?>">
       <input type="text" class="inputcss" placeholder="" name="keyword" value="<?php echo I('get.keyword');?>"/>
       <button type="submit" class="btn-search"></button>
    </form>
    <span class="qvxiao">取消</span>
  </div>
  <div class="searchbox">
    <a href="javascript:void(0);" class="search"></a>
  </div>
  <div class="menubox">
    <a href="javascript:void(0);" class="menu"></a>
  </div>
</header>

<?php $menu_root_ul_id="slide-menu"; $filetpl="<a href='\$href' target='\$target'>\$label</a>"; $foldertpl="<a class='dropdown-toggle' href='\$href' target='\$target'>\$label</a>"; $ul_class="dropdown-menu" ; $li_class="" ; $menu_root_ul_class=""; $showlevel=6; $dropdown='dropdown'; ?>

<?php echo sp_get_menu("main",$menu_root_ul_id,$filetpl,$foldertpl,$ul_class,$li_class,$menu_root_ul_class,$showlevel,$dropdown);?>

<!-- <nav id="slide-menu">
  <a href="#">别墅</a>
  <a href="#">平层/公寓</a>
  <a href="#">公共空间</a>
  <a href="#">获奖作品</a>
  <a href="#">东西资讯</a>
  <a href="#">东西服务</a>
</nav> -->


<section class="wrapper">
<!-- 主图 -->
<div class="bannerbox">
  <div class="banner-mask">
    <img src="/themes/dongxingxijian/Public/assets/images/banner.png" alt=""/>
  </div>
</div>

<!-- 其他主图 -->
<div class="workslist">
  <ul>
    <li>
      <a href="#">
        <img src="/themes/dongxingxijian/Public/assets/images/main1.png" alt="" class="img-responsive"/>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="/themes/dongxingxijian/Public/assets/images/main2.png" alt="" class="img-responsive"/>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="/themes/dongxingxijian/Public/assets/images/main3.png" alt="" class="img-responsive"/>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="/themes/dongxingxijian/Public/assets/images/main4.png" alt="" class="img-responsive"/>
      </a>
    </li>
  </ul>
</div>

<!-- 东西资讯 -->
<div class="home-news">
  <h2>东西资讯</h2>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="mainbox">
              <div class="newsbox">
                <a href="#" style="background-image:url(/themes/dongxingxijian/Public/assets/images/newimg.png)">
                  <div class="title">
                    <p class="text-ellipsis">新闻摘要新闻摘要新闻摘要新闻摘要</p>
                    <span>2017.12.12</span>
                  </div>
                </a>
              </div>
              <a href="#" class="h-title text-ellipsis">新闻标题</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mainbox">
              <div class="newsbox">
                <a href="#" style="background-image:url(/themes/dongxingxijian/Public/assets/images/newimg.png)">
                  <div class="title">
                    <p class="text-ellipsis">新闻摘要新闻摘要新闻摘要新闻摘要</p>
                    <span>2017.12.12</span>
                  </div>
                </a>
              </div>
              <a href="#" class="h-title text-ellipsis">新闻标题</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mainbox">
              <div class="newsbox">
                <a href="#" style="background-image:url(/themes/dongxingxijian/Public/assets/images/newimg.png)">
                  <div class="title">
                    <p class="text-ellipsis">新闻摘要新闻摘要新闻摘要新闻摘要</p>
                    <span>2017.12.12</span>
                  </div>
                </a>
              </div>
              <a href="#" class="h-title text-ellipsis">新闻标题</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mainbox">
              <div class="newsbox">
                <a href="#" style="background-image:url(/themes/dongxingxijian/Public/assets/images/newimg.png)">
                  <div class="title">
                    <p class="text-ellipsis">新闻摘要新闻摘要新闻摘要新闻摘要</p>
                    <span>2017.12.12</span>
                  </div>
                </a>
              </div>
              <a href="#" class="h-title text-ellipsis">新闻标题</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mainbox">
              <div class="newsbox">
                <a href="#" style="background-image:url(/themes/dongxingxijian/Public/assets/images/newimg.png)">
                  <div class="title">
                    <p class="text-ellipsis">新闻摘要新闻摘要新闻摘要新闻摘要</p>
                    <span>2017.12.12</span>
                  </div>
                </a>
              </div>
              <a href="#" class="h-title text-ellipsis">新闻标题</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

<!-- 东西服务 -->
<div class="home-service">
  <a href="#">
    <img src="/themes/dongxingxijian/Public/assets/images/server.png" alt="" class="img-responsive"/>
  </a>
</div>
</section>

<?php echo hook('footer');?>
<!-- 底部 -->
<footer id="footer">
  <div class="f-container">
    <nav>
      <ul>
        <li><a href="#">订阅资讯</a></li>
        <li><a href="#">联系东西</a></li>
      </ul>
    </nav>
    <div class="contact">
      <p>关注我们</p>
      <div class="c-box">
        <a href="#">
          <img src="/themes/dongxingxijian/Public/assets/images/qq_icon.png" alt="" class="img-responsive"/>
        </a>
        <a href="#">
          <img src="/themes/dongxingxijian/Public/assets/images/wechat_icon.png" alt="" class="img-responsive"/>
        </a>
      </div>
    </div>
  </div>
  <div class="copyright">
    <p>版权信息</p>
    <p>版权信息</p>
  </div>
</footer>
<?php echo ($site_tongji); ?>

<script type="text/javascript">
//全局变量
var GV = {
    ROOT: "/",
    WEB_ROOT: "/",
    JS_ROOT: "public/js/"
};
</script>
 <script src="/themes/dongxingxijian/Public/assets/js/jquery.min.js"></script>
 <script src="/themes/dongxingxijian/Public/assets/js/flexible.js"></script>
 <script src="/themes/dongxingxijian/Public/assets/js/swiper.jquery.min.js"></script>
 <script src="/themes/dongxingxijian/Public/assets/js/common.js"></script>

<script src="/themes/dongxingxijian/Public/assets/js/swiper.jquery.min.js"></script>
<script>
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 10
  })
  </script>
<?php echo hook('footer_end');?>
</body>
</html>