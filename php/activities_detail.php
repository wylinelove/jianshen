<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json;charset=utf-8');
  require('init.php');
  @$sid=$_REQUEST['sid'];
  $reg='/^[0-9]{1,}$/';
  $rs=preg_match($reg,$sid);
  if($rs==0){
    die('编号格式不正确');
  }
  $sql="select lid,title,detail,time from  item_detail where sid=$sid";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,1);
  echo json_encode($rows);