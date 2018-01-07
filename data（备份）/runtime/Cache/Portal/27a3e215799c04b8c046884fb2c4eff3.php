<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<title><?php echo ($name); ?> <?php echo ($seo_title); ?> <?php echo ($site_name); ?></title>
<meta name="keywords" content="<?php echo ($seo_keywords); ?>" />
<meta name="description" content="<?php echo ($seo_description); ?>">
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

	<div class="container">
		<h2><?php echo ($name); ?></h2>

		<?php $lists = sp_sql_posts_paged("cid:$cat_id;order:post_date DESC;",20); ?>
		<div id="container">
			<div class="grid-sizer"></div>
			<?php if(is_array($lists['posts'])): $i = 0; $__LIST__ = $lists['posts'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; $smeta=json_decode($vo['smeta'], true); ?>

			<div class="item">
				<div class="tc-gridbox">
					<div class="header">

						<?php if(!empty($smeta['thumb'])): ?><div class="item-image">
							<a href="<?php echo leuu('article/index',array('id'=>$vo['object_id'],'cid'=>$vo['term_id']));?>">
								<img src="<?php echo sp_get_asset_upload_path($smeta['thumb']);?>"
								class="img-responsive" alt="<?php echo ($vo["post_title"]); ?>">
							</a>
						</div>
						<?php else: endif; ?>

						<h3>
							<a href="<?php echo leuu('article/index',array('id'=>$vo['object_id'],'cid'=>$vo['term_id']));?>"><?php echo ($vo["post_title"]); ?></a>
						</h3>
						<hr>
					</div>
					<div class="body">
						<a href="<?php echo leuu('article/index',array('id'=>$vo['object_id'],'cid'=>$vo['term_id']));?>"><?php echo (msubstr($vo["post_excerpt"],0,256)); ?></a>
					</div>
					<div class="footer">
						<div class="pull-left">
							<span class="meta"><?php echo ($vo["post_date"]); ?></span>
						</div>
						<div class="pull-right">
							<a href="javascript:;"><i class="fa fa-eye"></i><span><?php echo ($vo["post_hits"]); ?></span></a>
							<a href="<?php echo U('article/do_like',array('id'=>$vo['object_id']));?>" class="js-count-btn"><i class="fa fa-thumbs-up"></i><span class="count"><?php echo ($vo["post_like"]); ?></span></a> 
							<a href="<?php echo U('user/favorite/do_favorite',array('id'=>$vo['object_id']));?>" class="js-favorite-btn" data-title="<?php echo ($vo["post_title"]); ?>" data-url="<?php echo leuu('portal/article/index',array('id'=>$vo['object_id'],'cid'=>$vo['term_id']));?>" data-key="<?php echo sp_get_favorite_key('posts',$vo['object_id']);?>">
								<i class="fa fa-star-o"></i>
							</a>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div><?php endforeach; endif; else: echo "" ;endif; ?>
		</div>
		<!-- <div class="pagination"><ul><?php echo ($lists['page']); ?></ul></div> -->
		<div class="js-infinite-scroll-loading text-center" style="display: none;">正在加载...</div>
		<div id="nextpage"></div>
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

	</div>

	<!-- JavaScript -->
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

	<script src="/themes/dongxingxijian/Public/assets/js/imagesloaded.pkgd.min.js"></script>
	<script src="/themes/dongxingxijian/Public/assets/js/masonry.pkgd.min.js"></script>
	<script src="/themes/dongxingxijian/Public/assets/js/jquery.infiniteScroll.js"></script>
	<script>
		
		$(function(){
			var $container= $('#container').masonry({
				columnWidth : '.grid-sizer',
				itemSelector : '.item'
			});
			
			$container.imagesLoaded().progress(function (imgLoad, image) {
				var msnry = $container.data('masonry');
				var itemSelector = msnry.options.itemSelector;
		        var $item = $(image.img).parents(itemSelector);
		        $('.tc-gridbox',$item).css('opacity',1);
		        msnry.layout();
		    });
			
			$('#nextpage').infiniteScroll({
				loading:'.js-infinite-scroll-loading',
				total_pages:<?php echo ($lists['total_pages']); ?>,
				success:function(content){
					var $items=$(content).find('#container .item');
					if($items.length>0){
						//$('.tc-gridbox',$items).css('opacity',1);
						$container.append( $items )
					    // add and layout newly prepended items
					    .masonry( 'appended', $items );
						$items.imagesLoaded().progress(function (imgLoad, image) {
							var msnry = $container.data('masonry');
							var itemSelector = msnry.options.itemSelector;
					        var $item = $(image.img).parents(itemSelector);
					        $('.tc-gridbox',$item).css('opacity',1);
					        msnry.layout();
					    });
					}
				},
				finish:function(){
					
				}
			});
		});
		
		
		
		
	</script>
</body>
</html>