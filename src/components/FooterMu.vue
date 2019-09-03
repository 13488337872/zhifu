<template>
  <div class="home1">
        <footer>
            <a href="#"><span class="iconfont icon-tubiaoku-"></span><em class="last_em1">首页</em></a>
            <a href="#"><span class="iconfont icon-caifu"></span><em>财富</em></a>
            <a href="#"><span class="iconfont icon-koubei"></span><em>口碑</em></a>
            <a href="#"><span class="iconfont icon-pengyou"></span><em>朋友</em></a>
            <a href="#"><span class="iconfont icon-geren"></span><em class="last_em">我的</em></a>
        </footer>
  </div>
</template>

<script>
export default {
    
  

}
</script>

<style>


.footer_solid{
	display: -webkit-flex;
	flex: 1;
	width: 100%;
	background-color: #ffffff;
	font-size: .15rem;
	color: #999999;
	letter-spacing: 2px;
	justify-content: center;
}
.footer_solid span{
	display: block;
	margin: .6rem .1rem;
}
.footer_solid img{
	width: 100px;
	margin: .6rem 0;
}
/* footer */
footer{
	display: -webkit-flex;
	height: .8rem;
	border-top: 1px solid #e0e1e3;
	justify-content: space-around;
	align-items: center;
	text-align: center;
}
footer em{
	display: block;
	font-size: .13rem;
	color: #888888;
	font-style: normal;
}
footer .icon-tubiaoku-{
	color: #29a1f7;
}
footer .iconfont{
	font-size: .4rem;
}
footer .icon-geren{
	font-size: .29rem;
}
footer .icon-pengyou{
	font-size: .43rem;
}
footer .icon-caifu{
	font-size: .4rem;

}
.last_em{
	line-height: .3rem;
	margin-bottom: -9px;
}
.last_em1{
	color: #29a1f7;
}




</style>

