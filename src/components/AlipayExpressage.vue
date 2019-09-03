<template>
  <div id="expre">
    <ExpreHeader/>
    <ExpreCenter/>
    <ExpreFooter/>
  </div>
</template>

<script>
import ExpreHeader from './ExpreHeader.vue';
import ExpreCenter from './ExpreCenter.vue';
import ExpreFooter from './ExpreFooter.vue';
import iconfont from './iconfont.css';

export default {
  name: 'expre',
  components: {
    ExpreHeader,
    ExpreCenter,
    ExpreFooter,
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
ul,ol{
	list-style: none;
}
html,body{
	height: 100%;
}
body{
	font-family: "微软雅黑";
	background: #f5f5f5;
}

#expre{
    height: inherit;
	display: -webkit-flex;
	flex-direction:column;
}
#app{
    height: inherit;
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

