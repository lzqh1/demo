window.onload=function(){
		var oBox=document.getElementById('box');
		
		var oUl=document.getElementById('ul1');
		
		var aLi=oUl.children;
		
		var oL=document.getElementById('left');
		var oR=document.getElementById('right');
		
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
		
		var n=0;
		var timer=null;
		
		oL.onclick=function(){
			toL();	
		};
		function toL(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n-=10;
				  
				  if(n<-oUl.offsetWidth/2){
					n=0;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},30)	
		};
		toL();
		oR.onclick=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n+=10;
				  
				  if(n>0){
					n=-oUl.offsetWidth/2;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},30)	
		};
		
		
		oBox.onmouseover=function(){
			clearInterval(timer);	
		};
		oBox.onmouseout=function(){
			toL();
		};
	};
	

//轮播
var swiper=new Swiper(".swiper-container",{
				autoplay:2000,
				loop:true,
				pagination:".swiper-pagination",
				prevButton:".swiper-button-prev",
				nextButton:".swiper-button-next"
			  })



//下拉菜单
$(".li1").hover(function(){
	$(".nav").stop().slideToggle()
})
