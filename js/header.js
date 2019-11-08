
$(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/header.css";
	document.head.appendChild(link);
	$("#header").load("header.html",function(html){
		document.getElementById("header")
						.innerHTML=html;})
	})