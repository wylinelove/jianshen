$(function(){
   
   var $detail=$("div.about-detail>ul.image-detail");
  $detail.animate({
     bottom:0
   },1000,function(){
	  $detail.show();
	 })
//Î²²¿ÂÖ²¥¹ö¶¯
	 var $banner=$('div.bannerCertificates>ul');
	 var timer=null,LIWIDTH=1200,wait=3000,interval=500,moved=0;
	  function move(){
		  moved++;
	     $banner.animate({
		    left:-LIWIDTH*moved
		 },interval,function(){
		 	if(moved==1){
		       moved=0;
			   $banner.css("left",0);
			}
			})
	  }
      function autoMove(){
	     setInterval(function(){
		   move();
		 },wait+interval)
	  }
		 autoMove();
});