;(function (){
	
	 $(document).ready(function () {
	 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '  .swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  speed:2000,
  autoplay :{
  	delay:2000,
  	disableOnInteraction:false
  	
  },
   
  })    

<!--回到顶部-->
  
  var  shubiao = document.querySelector(".img-one");
  shubiao.onclick = function () {
  
  	document.body.scrollTop = document.documentElement.scrollTop = 0;
  	
  }
 
 
 
 
 
 function xia(){
		$(".img-san").on("click",function(){
        $(".left-div").show()
		})
	}
	xia();
	function yinchang(){
		$(".left-div3").on("click",function(){
			 $(".left-div").hide()
		})
	}
	yinchang();
})
	
	
	
	

	
	
	
	
	
	
	
})();
