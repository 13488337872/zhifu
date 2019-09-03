<template>
  <div id="app0">
    <HeaderMu msg="Welcome to Your Vue.js App"/>
    <CenterMu msg="Welcome to Your Vue.js App"/>
    <FooterMu msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CenterMu from './CenterMu.vue';
import FooterMu from './FooterMu.vue';
import HeaderMu from './HeaderMu.vue';
import iconfont from './iconfont.css';

export default {
  name: 'app0',
  components: {
    HeaderMu,
    FooterMu,
    CenterMu,
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
#app{
	height: inherit;
}

#app0{
	height: inherit;
	display: -webkit-flex;
	flex-direction:column;
}
.homecenter{
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
</style>

