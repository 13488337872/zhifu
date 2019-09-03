<template>
    <div id="expre0">

        <header>
			<div class="header_top">
				<div class="head_top_left">
					<span class="head_top_span1">我的快递</span>
				</div>
				<div class="head_top_right">
					<img class="head_top_img1" src="./img/sandian.jpg" alt=""><img class="head_top_img2" src="./img/X.jpg" alt="">
				</div>
			</div>
			<div class="header_bottom">
				<input type="text" placeholder="输入或扫一扫快递单号">
				<a href="#"><span class="iconfont icon-richscan_icon"></span></a>
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
	height: 1.76rem;
	/* flex: 1; */
	background-image: url(../img/G_head.jpg);
	background-size: 100%;
	position: relative;
}
.header_top{
	display: flex;
	color: #ffffff;
	font-size: .22rem;
}
.head_top_left{
	margin-left: 14px;
	margin-top: 11px;
}
.head_top_right{
	display: flex;
}
.head_top_right img{
	width: .3rem;
	height: .3rem;
}
.head_top_img1{
	position: absolute;
	top: 14px;
    right: .86rem;
}
.head_top_img2{
	position: absolute;
    top: 14px;
    right: .31rem;
}
.header_bottom{
	display: flex;
}
.header_bottom input{
    width: 4.9rem;
    height: .6rem;
	text-indent: 10px;
	position: relative;
	margin-top: .45rem;
    margin-left: .24rem;
	color: #cccccc;
}
.icon-richscan_icon{
	position: absolute;
	font-size: .37rem;
	margin-top: .58rem;
    margin-left: -.55rem;
	color: #048be7;
}
.iconfont{
	display: block;
	color: #aeaeae;
	font-size: .41rem;
}
</style>
