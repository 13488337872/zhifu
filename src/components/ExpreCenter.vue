<template>
    <div id="exprecenter">
        

<div class="content">
		<div class="info">
			<a href="#"><span class="iconfont icon-_xiaochengxu_shangmenqujian"></span>上门取件</a>
			<a href="#"><span class="iconfont icon-shunfeng"></span>顺丰寄件</a>
			<a href="#"><span class="iconfont icon-kuaidi1"></span>常用快递</a>
			<a href="#"><span class="iconfont icon-kuaidi"></span>同城直送</a>
			<a href="#"><span class="iconfont icon-cncainiaoyizhan"></span>菜鸟驿站</a>
			<a href="#"><span class="iconfont icon-guojiwuliu"></span>国际查件</a>
			<a href="#"><span class="iconfont icon-shequ"></span>社区生活</a>
			<a href="#"><span class="iconfont icon-gengduo"></span>更多</a>
		</div>
		
		<div class="banner2">
			<img src="./img/ora_banner.jpg" alt="">
			<div class="Banner2_txt">
				<h3>挑战天天收快递</h3>
				<span class="bn2_sp2">开宝箱人人有福利</span><span class="bn2_sp3">GO></span>
			</div>
		</div>
		<div class="two">
			<div class="pay_list">
				<div class="pay_left">
					<h4>最高领五元</h4>
					<span>寄件优惠大放送</span>
					<img src="./img/5yuan.jpg" alt="">
				</div>
				<div class="pay_right">
					<h4>天天“收快递”</h4>
					<span>挑战抢大额优惠券</span>
					<img src="./img/liwu.jpg" alt="">
				</div>
			</div>
		</div>
		
		<div class="box">
			<img src="./img/sf.jpg" alt="">
			<ul>
				<li class="box_span1">运输中</li>
				<li class="box_span2">顺丰速运:SF1002277606774</li>
			</ul>
		</div>
		<div class="nathing">
			
		</div>
		</div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>

#exprecenter{
    flex: 1;
    overflow-y: auto;
}
/* info */
.info{
	width: 91%;
	margin: 0 auto;
	height: 3.02rem;
	/* flex: 1; */
	display: -webkit-flex;
	-webkit-flex-wrap: wrap;
	justify-content: space-around;
	background-color: #ffffff;
	align-items: center;
	text-align: center;
}
.info a{
	font-size: .16rem;
	width: 22%;
	line-height: .51rem;
    margin-top: 12px;
    margin-bottom: 13px;
	color: #333333;
}
.info img{
	width: .41rem;
	height: .41rem;
	margin-left: .38rem;
	margin-bottom: 2px;
}
.icon-_xiaochengxu_shangmenqujian{
	color: #019df2;
}
.icon-shunfeng{
	color: #019df2;
}
.icon-kuaidi1{
	color: #019df2;
}
.icon-kuaidi{
	color: #019df2;
}
.icon-cncainiaoyizhan{
	color: #019df2;
}
.icon-guojiwuliu{
	color: #019df2;
}
.icon-shequ{
	color: #019df2;
}
.icon-gengduo{
	color: #019df2;
}
/* .banner{
    width: 91%;
    margin: 14px auto;
    height: 1.16rem;
	background-image: url(../img/ora_banner.jpg);
	background-size: 100%;
} */
.banner2 img{
	width: 100%;
}
.banner2{
	width: 91%;
	margin: 14px auto;
	position: relative;
	/* flex: 1; */
}
.Banner2_txt{
    width: 243px;
    height: 73px;  
    position: absolute;
    top: 0;
}
.banner2 h3{
	font-size: .28rem;
	display: block;
	margin-top: 14px;
	margin-left: 10px;
	color: #ffffff;
}
.bn2_sp2{
	display: block;
	margin-top: 9px;
	margin-left: 10px;
	font-size: .2rem;
	color: #ffffff;
	float: left;
}
.bn2_sp3{
	display: block;
	float: left;
	font-size: .2rem;
	background-color: #fff772;
	color: #fd4418;
	margin-top: 9px;
    margin-left: 12px;
	border-radius: 10px;
	width: .7rem;
	text-align: center;
}
/* .pay{
	height: 1.85rem;
	flex: 1;
	background-color: #ffffff;
} */ 
.pay_list{
	width: 4.92rem;
	height: 1.0rem;
	margin: 0 auto;
	border: 1px solid #eeeeee;
}
.pay_left{
	width: 2.44rem;
	height: 1.05rem;
	float: left;
	position: relative;
	background-color: #ffffff;
}
.pay_left img{
	width: .7rem;
	height: .7rem;
	float: right;
	position: absolute;
    top: 12px;
    right: 10px;
}
.pay_left h4,.pay_right h4{
	font-size: .17rem;
	color: #353535;
	margin-top: 12px;
	margin-left: 10px;
	line-height: 26px;
}
.pay_left span,.pay_right span{
	font-size: .14rem;
	color: #999999;
	float: left;
	margin-left: 10px;
	line-height: 16px;
}
.pay_right{
	width: 2.46rem;
	height: 1.05rem;
	float: left;
	position: relative;
	border-left: 1px solid #eeeeee;
	background-color: #ffffff;
}
.pay_right img{
	width: .7rem;
	height: .7rem;
	float: right;
	position: absolute;
    top: 12px;
    right: 10px;
}
.box{
    width: 91%;
    margin: 14px;
    height: 1.4rem;
    border-bottom: 1px solid #eeeeee;
    background-color: #ffffff;
	position: relative;
}
.box img{
	width: 1rem;
	height: 1rem;
	float: left;
	border-radius: 4px;
	margin-top: 14px;
    margin-left: 14px;
}
.box_span1{
	color: #29AB91;
	font-size: .22rem;
}
.box_span2{
	color: #343434;
	font-size: .18rem;
}
.box ul{
	line-height: .35rem;
	position: absolute;
	top: .35rem;
    left: 1.25rem;
}
.box li{
	text-indent: 14px;
}
.nathing{
	width: 100%;
	height: 1rem;
}
</style>
