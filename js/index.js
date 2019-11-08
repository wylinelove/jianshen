//banner
  $(function(){
    $.ajax({
	  type:"GET",
	  url:"php/index.php",
	  dataType:"json",
	  success:function(res){
	    var html='';
		var banner=res.banner;
		var LIWIDTH=1000,moved=0,wait=3000,interval=500,timer=null;
		for(var b of banner){
			var {href,img}=b;
		  html+=`<li class="lf">
			  <a href="${href}"><img src="${img}" alt=""></a>
			   <div class="topImg"><a href=""><img src="img/index/banner1.png" alt=""></a></div>
		  </li>`;
		}
		html+=`<li>
			<a href="${banner[0].href}"><img src="${banner[0].img}" alt=""></a>
			 <div class="topImg"><a href=""><img src="img/index/banner1.png" alt=""></a></div>
		</li>`;
		var $ulBanner=$("ul.bannerImg");
	    $ulBanner.html(html).css("width",LIWIDTH*(banner.length+1));
		//两个原点
		$("div.icon-list").html(("<li><a></a></li>").repeat(banner.length));
        $("div.icon-list>li:eq(0)").addClass("current");

		function move(){
			moved++;
		    $ulBanner.animate({
			  left:-LIWIDTH*moved
			},interval,function(){
			  if(moved==banner.length){
                 $ulBanner.css("left",0)
					   moved=0;
			  }
			$("div.icon-list>li:eq("+moved+")").
				addClass("current").siblings().removeClass("current");
			  })	
		}	  
	   function autoMove(){
			timer=setInterval(function(){
			   move();
			},wait+interval)
	   }
	   autoMove();
	   //评价里的左右点击按钮
	   var LIWIDTH=1000,moved=0,interval=500;
	   var $ulComment=$('ul.comment-ul');
	   $('ul.ck-change>li.ck-lf>img').click(function(){
	      if(!$ulComment.is(':animated')){
		     if(moved==0){
			    moved=2;
                 $ulBanner.css("left",-LIWIDTH*2)
			  }
		  }
		  moved--;
          $ulComment.stop(true).animate({
				left:-LIWIDTH*moved 
			  },interval)
	   })
		$("ul.ck-change>li.ck-rg>img").click(function(){
		    if(!$ulComment.is(":animated")){
				if(moved==2){
			     moved=0;
				$ulComment.css("left",0);
			  }
			   moved++;
		    $ulComment.stop(true).animate({
			  left:-LIWIDTH*moved
			},interval)	
			}
		
		})
		//banner左右点击按钮
		$("div.ck-left").click(function(e){
			e.preventDefault();
			 if(! $ulBanner.is(":animated")){
			   if(moved==0){
			    moved=banner.length;
                 $ulBanner.css("left",-LIWIDTH*banner.length)
			  }
				moved--;
			   $ulBanner.stop(true).animate({
				left:-LIWIDTH*moved 
			  },interval,function(){
				$("div.icon-list>li:eq("+moved+")").
					addClass("current").siblings().removeClass("current");
			  })
			 
			 }
		
		})
		$("div.ck-right").click(function(e){
			e.preventDefault();
		    if(! $ulBanner.is(":animated")){
			  move();
			}
		
		})
		//鼠标进入暂停
		 $ulBanner.hover(function(){
		     clearInterval(timer);
			 timer=null;
		},function(){
		  autoMove();
		})
	  },
	  err:function(){
	    console.log("网络故障请检查");
	  }
	});
  
  //第二部分
  $(window).scroll(function(){ 
   var scrollTop=$(window).scrollTop();
//   console.log(scrollTop);
   var $doElementText=$("div.do-element-text");
   if(scrollTop<100){
     $doElementText.css('height',0)
   }else{
	  $doElementText.css({
	    height:"130px",
		top:"45px"
	  });
   }
  if(scrollTop>=326){
    $("div.ad>div.ad-left").css("width","50%");
     $("div.ad>div.ad-right").css("width","50%");
  }
  if(scrollTop>=1700){
   $('div.health-food>div.info').css('height','300px');
  }
   if(scrollTop>=1900){
   $('div.comment').css('height','300px');
  }
  })
//活动事件
  $.ajax({
    type:'GET',
	url:'php/index.php',
	dataType:'json',
	success:function(res){
	  var activity=res.activities;
	  var html='';
	 for(var ac of activity){
		 console.log(ac.sid);
	   html+=`<li>
	  <a href="activities_detail.html?sid=${ac.sid}">
	    <div><img src="${ac.img}" alt=""></div>
	   <div class="ac-bottom">	
		<div class="title">${ac.title}</div>
		<div class="time">${ac.time1}</div>
		<div class="time">${ac.time2}</div>
	  </div>
		<div class="bgImg"><img src="img/index/actp.jpg" alt=""></div>
	  </a>
	  </li>`;
	 $('ul.activities').html(html);
	 }
	},
	err:function(){
	  console.log(err);
	}
  })
//第六部分
 var cities=[
     [
       {"name":'东城区',"value":101},
       {"name":'西城区',"value":102},
       {"name":'海淀区',"value":103},
       {"name":'朝阳区',"value":104}
     ],
     [
       {"name":'河东区',"value":201},
       {"name":'河西区',"value":202},
       {"name":'南开区',"value":203}
     ],
     [
       {"name":'石家庄市',"value":301},
       {"name":'廊坊市',"value":302},
       {"name":'保定市',"value":303},
       {"name":'唐山市',"value":304},
       {"name":'秦皇岛市',"value":305}
     ]
  ];
/*联系方式二级联动*/
  //查找触发事件的元素
  var selProvs=document.getElementsByName("province")[0];
  selProvs.onchange=function(){
    var i=this.selectedIndex;
    var selCts=document.getElementsByName("city")[0];
    selCts.innerHTML="";
    var frag=document.createDocumentFragment();
    if(i>0){
     
       frag.appendChild(new Option("-请选择-"));
       var cts=cities[--i];
      for(var {name,value} of cts){//解构
          frag.appendChild(new Option(name,value));
     }
     selCts.className="";
     selCts.appendChild(frag);
    }else{
      selCts.className="hide";
    }
  }
  });