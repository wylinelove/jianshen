$(function(){
  function loadPage(pno,pageSize){
	  $.ajax({
		type:'GET',
		url:'php/knowledge.php',
        data:{pno,pageSize},
		success:function(result){
			console.log(result);
          var res=result.data;
		  var html='';
		  for(var k of res){
			html+=`<div>
		    <div class="detail-img"><img src="${k.img}" alt=""></div>
			<div class="title"><a href="">${k.title}</a></div>
			<div class="detail">${k.detail}
			   <div class="time">${k.time}</div>
			</div>
		  </div>`; 
		  }
		    $('div.body-detail').html(html);
		  var msg='';
           for(var m of res){
		     msg+=`<div class="item">最新信息</div>
	     <div class="image"><img src="${m.img}" alt=""></div>
		 <div class='title'><a href="">${m.title}</a></div>
		 <div class="detail"><a href="">${m.detail}</a></div>`;
		   }
		    $("div.body-right").html(msg);
			//分页
		    var pageCount=result.pageCount;
			 html=`<li class="previous">上一页</li>`;
		   for(var i=1;i<=pageCount;i++){
			  if(i!=pno){
				html+=`<li>${i}</li>`;
			  }else{
				html+=` <li class="current">${i}</li>`;
			  }
		   }
		  html+=`<li class="next">下一页</li>`;
		   $('ul.pages').html(html);
		   if(pno==1){
		     $('ul.pages').children(':first-child').addClass('disabled');

		   }
		   if(pno==pageCount){
		    $('ul.pages').children(':last-child').addClass('disabled');
		   }
		   var divPages=document.getElementsByClassName('pages')[0];
		divPages.onclick=function(e){
	  if(e.target.nodeName==="LI"&&e.target.className!=="current"&&e.target.className.indexOf("disabled")==-1){
		 if(e.target.className.indexOf("previous")!==-1){
		   var pno=divPages.querySelector(".current").innerHTML;
			   loadPage(pno-1);
		 }else if(e.target.className.indexOf("next")!==-1){
			 var pno=divPages.querySelector(".current").innerHTML;
			 loadPage(pno+1);
		 }else{
		   loadPage(e.target.innerHTML);
		 }
	  }
	}
		 
		},
		err:function(){
			console.log('网络故障，请检查');
	   }
	  
	  })
  }
	   loadPage(1,2);
});