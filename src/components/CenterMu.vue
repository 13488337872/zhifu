<template>
  <div class="homecenter">
    <div class="content">
		<div class="info">
			<a href="#"><span class="iconfont icon-zhuanzhang"></span>转账</a>
			<a href="#"><span class="iconfont icon-yinhangqia-copy"></span>信用卡还款</a>
			<a href="#"><span class="iconfont icon-huafei"></span>充值中心</a>
			<a href="#"><span class="iconfont icon-yuebao"></span>余额宝</a>
			<a href="#"><span class="iconfont icon-taopiaopiao1"></span>电影淘票票</a>
			<a href="#"><span class="iconfont icon-mayisenlin"></span>蚂蚁森林</a>
			<a href="#"><span class="iconfont icon-chengshifuwux"></span>城市服务</a>
			<a href="#"><span class="iconfont icon-zhimaxinyong-"></span>芝麻信用</a>
			<a href="#"><img src="./img/car.jpg" alt="">火车票机票</a>
			<a href="#"><span class="iconfont icon-eliaomo"></span>付饿了么外卖钱</a>
			<a href="#"><span><img src="./img/minji.jpg" alt=""></span>蚂蚁庄园</a>
			<a href="#"><span class="iconfont icon-gengduo"></span>更多</a>
		</div>
		<div class="banner">
			<img class="banner_img" src="./img/A_banner_1.jpg" alt="">
				<ul class="banner_list">
					<li><a href="#">快去捐步兑换公益金啦<span>刚刚</span></a></li>
					<li><a href="#">好友给你送能量了，去看看<span>1小时前</span></a></li>
				</ul>
			<a href="#"><img class="banner_img2" src="./img/jiantou.jpg" alt=""></a>
		</div>
		<div class="banner2">
			<img src="./img/A4_1.jpg" alt="">
			<div class="Banner2_txt">
				<h3>寻找AR<span>绿色能量球</span></h3>
				<span class="bn2_sp2">免费豆浆加油条早餐等你拿</span><span class="bn2_sp3">GO></span>
			</div>
		</div>
		<!-- 惠支付 -->
		<div class="pay">
			<p>惠支付</p>
			<div class="pay_list">
				<div class="pay_left">
					<h4>答题领红包</h4>
					<span>瓜分88888元</span>
					<img src="./img/fenmrany.jpg" alt="">
				</div>
				<div class="pay_right">
					<h4>赚钱红包升级</h4>
					<span>2份赏金到手</span>
					<img src="./img/zhifuma.jpg" alt="">
				</div>
			</div>
		</div>
		<!-- 每日必抢 -->
		<div class="day">
			<p>mei日必抢<span>&nbsp;&nbsp;&nbsp;&nbsp;淘宝提供</span></p>
				<div class="daybox">
					<div class="daybox_1">
						<img src="./img/A_maijiufan.jpg" alt="">
						<span>买就返</span>
						<span>买好货返红包</span>
					</div>
					<div class="daybox_1">
						<img src="./img/A_choujiang.jpg" alt="">
						<span>免费抽奖</span>
						<span>抽100元红包</span>
					</div>
					<div class="daybox_1">
						<img src="./img/A_zadan.jpg" alt="">
						<span>砸蛋有红包</span>
						<span>天天有红包</span>
					</div>
					<div class="daybox_1">
						<img src="./img/A_chouzhi.jpg" alt="">
						<span>抽纸10包装</span>
						<span>特惠价<em>疯抢中</em></span>
					</div>
					<div class="daybox_1">
						<img src="./img/A_jiejing.jpg" alt="">
						<span>妈妈壹选洁净...</span>
						<span>特惠价<em>疯抢中</em></span>
					</div>
					<div class="daybox_1">
						<img src="./img/A_wazi.jpg" alt="">
						<span>【10双装】男...</span>
						<span>特惠价<em>疯抢中</em></span>
					</div>
				</div>
				<a href="#" target="_blank" class="day_moer">
					<span>更多精选商品</span><img src="./img/jiantou.jpg" alt="">
				</a>
		</div>
		</div>
		
		<div class="footer_solid">
			<img src="./img/dixian.jpg" alt=""><span>我是有底线的</span><img src="./img/dixian.jpg" alt="">
		</div>
	</div>
</template>

<script>
export default {
    
  

}
</script>

<style>

/* info */
.info{
	width: 100%;
	/* height: 3.02rem; */
	flex: 1;
	display: -webkit-flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: #ffffff;
	align-items: center;
	text-align: center;
}
.info a{
	font-size: .16rem;
	width: 22%;
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
.info .icon-zhuanzhang{
	color: #2c9ce8;
}
.info .icon-yinhangqia-copy{
	color: #f39927;
}
.info .icon-huafei{
	color: #f39927;
}
.info .icon-yuebao{
	color: #f1594b;
}
.info .icon-taopiaopiao1{
	color: #f1594b;
}
.info .icon-mayisenlin{
	color: #29ab91;
}
.info .icon-chengshifuwux{
	color: #1c8fe2;
}
.info .icon-zhimaxinyong-{
	color: #29ab91;
}
.info .icon-eliaomo{
	color: #2291e2;
}
.info .icon-gengduo{
	color: #bbbbbb;
}

/* banner */
.banner{
	width: 100%;
	position: relative;
	flex: 1;
}
.banner_img{
	width: 100%;
	margin-top: .14rem;
	margin-bottom: .14rem;
}
.banner_img2{
	width: .18rem;
	height: .18rem;
	position: absolute;
    top: .4rem;
    right: .15rem;
}
.banner_list li:last-child{
	/* display: flex; */
	flex-wrap: nowrap;
}

.banner_list a{
	color: #000000;
}
.banner_list{
	width: 3.4rem;
	font-size: .16rem;
	position: absolute;
    top: .25rem;
    left: 1.3rem;
	line-height: .25rem;
}
.banner_list span{
	font-size: 10px;
	color: #999999;
	padding-left: 10px;
}
.banner2 img{
	width: 100%;
	margin-bottom: .14rem;
}
.banner2{
	width: 100%;
	position: relative;
	flex: 1;
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
}
.Banner2_txt>h3>span{
	color: #128dea;
}
.bn2_sp2{
	display: block;
	margin-top: 9px;
	margin-left: 10px;
	font-size: .2rem;
	color: #999999;
	float: left;
}
.bn2_sp3{
	display: block;
	float: left;
	font-size: .2rem;
	background-color: #e91b1b;
	color: #ffffff;
	margin-top: 9px;
    margin-left: 12px;
}
/* 惠支付 */
.pay{
	/* height: 1.85rem; */
	flex: 1;
	background-color: #ffffff;
}
.pay p{
	font-size: .21rem;
	line-height: .6rem;
	color: #000000;
	padding-left: 14px;
}
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
	color: #353535;
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
}
.pay_right img{
	width: .7rem;
	height: .7rem;
	float: right;
	position: absolute;
    top: 12px;
    right: 10px;
}
/* 每日必抢 */
.day{
	background-color: #ffffff;
	flex: 1;
}
.day p{
	font-size: .21rem;
	line-height: .6rem;
	color: #000000;
	padding-left: 14px;
}
.day>p>span{
	font-size: .16rem;
	color: #999999;
}
.day .daybox{
	margin: 0 auto;
	width: 4.92rem;
	height: 4.3rem;
	border: 1px solid #f5f5f5;
	display: -webkit-flex;
	flex-wrap: wrap;
	justify-content: center;
}
.daybox_1{
	width: 31%;
	/* background-color: #2C9CE8; */
	display: -webkit-flex;
	flex-direction: column;
	text-align: center;
}
.daybox_1 span{
	font-size: .19rem;
	line-height: .37rem;
}
.daybox_1 span:last-child{
	font-size: .15rem;
	letter-spacing: 1px;
	color: #999999;
}
.daybox_1 em{
	font-style: normal;
	color: #f34624;
}
.daybox_1 img{
	width: .87rem;
	height: .87rem;
	margin-top: 14px;
    margin-left: .3rem;
	margin-bottom: 10px;
}
.day_moer{
	margin-left: .22rem;
    width: 4.92rem;
	align-items: center;
	display: -webkit-flex;
	justify-content: space-between;
	border: 1px solid #f5f5f5;
}
.day_moer span{
	font-size: .15rem;
	display: block;
	margin-left: .4rem;
	line-height: .7rem;
	color: #333333;
	letter-spacing: 1px;
}
.day_moer img{
	width: .18rem;
    height: .18rem;
	margin-right: .3rem;
}



</style>

