<template>
  <div class="home0">
    <header>
		<div class="header_top">
			<input class="header_inp" type="text" placeholder="          蚂蚁花呗">
			<span class="iconfont icon-sousuo"></span>
			<span class="iconfont icon-maikefeng"></span>
			<a href="#"><span class="iconfont icon-tongxunlu"></span></a>
			<a href="#"><span class="iconfont icon-add"></span></a>
		</div>
		<div class="header_bottom">
			<a href="#"><span class="iconfont icon-richscan_icon"></span>扫一扫</a>
			<a href="#"><span class="iconfont icon-fukuanma"></span>付钱</a>
			<a href="#"><span class="iconfont icon-wuliaoguanlishouqianmadituiwuliao"></span>收钱</a>
			<a href="#"><span class="iconfont icon-zujianicon_-"></span>卡包</a>
		</div>
	</header>
  </div>
</template>

<script>
export default {
    
  

}
</script>

<style scoped>
/* header */
header{
	width: 100%;
	height: 1.77rem;
	/* flex: 1; */
	background: #1b82d1;
}
.header_top{
	display: -webkit-flex;
}
.header_top .iconfont{
	margin-left: .16rem;
	margin-right: .11rem;
}
.header_inp{
	display: block;
	width: 3.92rem;
	height: .42rem;
	margin-top: 10px;
    margin-left: 10px;
	position: relative;
	line-height: .42rem;
	font-size: 0.15rem;
}
.iconfont{
	display: block;
	color: #aeaeae;
	font-size: .41rem;
}
.icon-sousuo{
	position: absolute;
	top: .23rem;
    left: 5px;
	font-size: .26rem;
}
.icon-maikefeng{
	position: absolute;
	top: 0.26rem;
	left: 3.6rem;
	font-size: .26rem;
}
.icon-tongxunlu,.icon-add{
	font-size: .35rem;
	margin-top: .2rem;
	color: #ffffff;
}

/* header_bottom */

.icon-richscan_icon,.icon-fukuanma{
	font-size: .41rem;
	color: #ffffff;
}
.icon-wuliaoguanlishouqianmadituiwuliao{
	color: #ffffff;
	font-size: .41rem;
}
.icon-zujianicon_-{
	color: #ffffff;
	font-size: .41rem;
}
.header_bottom a{
	font-size: .16rem;
	color: #ffffff;
	width: 10%;
	text-align: center;
	line-height: .43rem;
}
.header_bottom{
	width: 100%;
	display: -webkit-flex;
	justify-content: space-around;
	margin-top: .23rem;
}
</style>

