$(function(){
  var sid=location.search.slice(5);
  console.log(sid);
  $.ajax({
    type:'GET',
	url:'php/activities_detail.php',
	data:{sid},
	success:function(res){
	  var html='';
	  var msg=res[0];
	  html+=`<div class="bodyTitle">${msg.title}</div>
		   <div class="pubTime">
		     <span>发布时间：</span>	
			 <span>${msg.time}
			 </span>
		   </div>
		   <div class="body-detail">
		     ${msg.detail}
		   </div>`;
	  $('div.body-left').html(html);
	},
    err:function(){
	  console.log(res);
	}
	
  
  })

})