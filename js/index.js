 window.onload=function() {
	
     var app= new Vue({
		el:'#vue-app',
		data:{
			mains:[
				{hrefs:'',srcs:'./image/zb.png',name:'直播互动'},
				{hrefs:'',srcs:'./image/mdzs.png',name:'门店展示'},
				{hrefs:'',srcs:'./image/mdyy.png',name:'门店预约'},
				{hrefs:'',srcs:'./image/szzx.png',name:'充值中心'},
				{hrefs:'',srcs:'./image/zxsc.png',name:'在线商城'},
				{hrefs:'',srcs:'./image/bpzx.png',name:'品牌专区'},
				{hrefs:'',srcs:'./image/cfyp.png',name:'厨房用品'},
				{hrefs:'',srcs:'./image/shyp.png',name:'生活用品'},
				{hrefs:'',srcs:'./image/splz.png',name:'食品零食'},
				{hrefs:'',srcs:'./image/shjd.png',name:'生活家电'}
			],
		cars:[
			{title:'销售TOP',
			style:{
				background:'url(./image/334.png) 0 0 no-repeat'
			},
			goods:[
				{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解jfdkl还将设立和飞机上的困难了 就  fjdsl jfsdkl 朝'},
				{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解朝'},
				]},
				{title:'推荐榜单',
				style:{
					background:'url(./image/1.png) 0 0 no-repeat'
				},
				goods:[
					{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解jfdkl还将设立和飞机上的困难了 就  fjdsl jfsdkl 朝'},
					{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解朝'},
					]},
					{title:'精选好物',
					style:{
						background:'url(./image/1.png) 0 0 no-repeat'
					},
					goods:[
						{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解jfdkl还将设立和飞机上的困难了 就  fjdsl jfsdkl 朝'},
						{img:'./image/zb.png',priceji:'444',priceli:'666',text:'合计分解朝'},
						]},
			],
			Navs:[
				{
				href:'./index.html',
				img:'./image/home.png',
				text:'首页',
				},
				{img:'./image/class.png',text:'分类'},
				{img:'./image/home.png',text:'社区'},
				{img:'./image/cars.png',text:'购物车'},
				{img:'./image/home.png',text:'个人中心'}
			],
		navNnm:0,
	},
	methods:{
		navClick:function(e){
			var that=this
			var navNnm=app.navNnm
			let index=e.path[2].dataset.index
			if(index){
				app.navNnm=index
			}else{
				navNnm!==index
			}
			// console.log(e.path[2].dataset.index)
			console.log(navNnm)
		}
	}
	});
	 var swiper = new Swiper('.swiper-container', {
	  pagination: {
	    el:'.swiper-pagination',
	  }
	})
}