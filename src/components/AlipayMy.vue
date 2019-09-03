<template>
  <div id="app0">
    <AlipayHeader/>
    <AlipayCenter/>
    <AlipayFooter/>
  </div>
</template>

<script>
import AlipayHeader from './AlipayHeader.vue';
import AlipayCenter from './AlipayCenter.vue';
import AlipayFooter from './AlipayFooter.vue';
import iconfont from './iconfont.css';

export default {
  name: 'app0',
  components: {
    AlipayHeader,
    AlipayCenter,
    AlipayFooter,
    iconfont
  }
}
</script>

<style>

body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,input,textarea,select,td,th{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ol{
	list-style: none;
}
html,body{
	height: 100%;
}
body{
	font-family: "微软雅黑";
	background: #f5f5f5;
	display: -webkit-flex;
	flex-direction:column;
}
.content{
	flex: 1;
	overflow-y: auto;
}
html{
	/*font-size: 100px;*/

	/*font-size: ?vw;

	1vw = 5.4

	?vw = 100px

	? = 100/5.4 = 18.51*/

	font-size: 18.51vw;
}
img{
	border: none;
	display: block;
}
header{
	width: 100%;
	height: 1.77rem;
	/* flex: 1; */
	background: #1b82d1;
}
.header_top{
	font-size: .22rem;
	color: #ffffff;
	display: flex;
	justify-content: space-between;
}
.head_top_span1{
	margin-top: .25rem;
	margin-left: .22rem;
}
.head_top_span2{
	margin-top: .25rem;
	margin-right: .22rem;
}
.header_bottom{
	width: 100%;
	display: flex;
}
.head_bot_img1{
	width: .74rem;
	height: .74rem;
	border: 3px solid #60a9e0;
	border-radius: 4px;
	margin-top: .2rem;
	margin-left: .18rem;
	position: relative;
}
.head_bot_img2{
	width: .3rem;
	height: .3rem;
	border-radius: 50%;
	position: absolute;
	top: 1.33rem;
    left: .83rem;
}
.head_bot_img3{
    width: .2rem;
    height: .2rem;
    margin-top: .5rem;
	margin-left: 2.56rem;
}
.head_bot_p1{
	color: #ffffff;
	font-size: .16rem;
	display: block;
    margin-top: .25rem;
    margin-left: 10px;
}
.head_bot_p2{
    color: #ffffff;
    font-size: .16rem;
    display: block;
    margin-top: .75rem;
    margin-left: -.5rem;
    border: 1px solid #449ce3;
    border-radius: 11px;
    width: 1.2rem;
    text-align: center;
    line-height: .3rem;
	background-color: #2a8ad7;
}
.box1{
	width: 100%;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 10px;
}
.box1_img1{
	width: .4rem;
	height: .4rem;
	margin-left: .18rem;
}
.box1_left{
	display: flex;
	align-items: center;
}
.box1_right{
	display: flex;
	align-items: center;
}
.box1_left>span{
	font-size: .19rem;
	padding-left: .2rem;
}
.box1_right>em{
	font-style: normal;
	font-size: .15rem;
	margin-right: .1rem;
	color: #999999;
}
.box1_img2{
	width: .2rem;
	height: .2rem;
	margin-right: .25rem;
}
.box2{
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
}
.box_border{
	border-top: 1px solid #eeeeee;
	border-bottom: 1px solid #eeeeee;
}

.box4{
	width: 100%;
	margin-top: 10px;
	margin-bottom: .66rem;
}
.content .icon-zhangdan{
	color: #f49c2e;
}
.content .icon-yue{
	color: #118eea;
}
.content .icon-yuebao{
	color: #e9531e;
}
.content .icon-yinhangqia-copy{
	color: #f49c2e;
}
.content .icon-zhimaxinyong-{
	color: #29ab91;
}
.content .icon-baoxian{
	color: #128dea;
}
.content .icon-wangshangyinhang{
	color: #29ab91;
}
.content .icon-kefu{
	color: #118eea;
}



.iconfont{
	display: block;
	color: #aeaeae;
	font-size: .41rem;
}
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
footer .icon-geren{
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
	color: #29a1f7;
}
.icon-tubiaoku-{
	color: #888888;
}

</style>

