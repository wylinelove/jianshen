$(function(){
	$("#btn").click(function(e){
		e.preventDefault();
		var uname=$("#uname").val();
		var $radio1=$("#radio1");
		var $radio2=$("#radio2");
		if($radio1.is(":checked")){
		  gender="男"
		}
		if($radio2.is(":checked")){
		  gender="女"
		}
		var phone=$("#phone").val();
		var province=$("#province").val();
		var city=$("#city").val();
		var item=$("#item").val();
		var preTime=$("#preTime").val();
		var successTime=$("#successTime").val();
	   $.ajax({
	  type:"POST",
	  url:"php/register.php",
	  data:{uname,gender,phone,province,city,item,preTime,successTime},
	  success:function(res){
	   if(res.code>0){
	     alert(res.msg);
		 console.log(res.msg);
	   }else{
	     alert(res.msg);
	   }
	  },
	  err:function(){
	    alert('网络故障，请检查');
	  }
	})
	
	})
	
	
	
});