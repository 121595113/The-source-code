<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript">
	window.onload=function(){
	    var send=document.getElementById('send'),
	        times=60,
	        timer=null;
	    send.onclick=function(){
	      // 计时开始 
          timer = setInterval(function(){
        	send.value = times+"秒后重试";
			send.setAttribute('disabled','disabled');
			times--;
			if(times <= 0){
				send.value = "发送验证码";
				send.removeAttribute('disabled');
				times = 60;
				clearInterval(timer);
			}
		},1000);
      
	    } 
	}
	</script>
</head>
<body>
	<input type="button" id="send" value="发送验证码">
</body>
</html>
