<?php
header('Access-Control-Allow-Origin:*');
  require('init.php');
  $output=[];
  $sql="select lid,img,href from health_indexBanner";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,1);
  $output["banner"]=$rows;
  $sql="select lid,img,title,time1,time2,sid from health_activities";
   $result=mysqli_query($conn,$sql);
  $details=mysqli_fetch_all($result,1);
  $output['activities']=$details;
  echo json_encode($output);