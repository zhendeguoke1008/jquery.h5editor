function dailog(h,w,text){
	var html = '<div class="dailog"><div class="close" onclick="dailogClose()"><img src="h5wap/image/close.jpg"/></div></div>';

	var left = (document.body.scrollWidth - w)/2;
	var top = (document.body.clientHeight - h)/2;

	$(document.body).append(html);
	$(".dailog").css("height",h);
	$(".dailog").css("width",w);
	$(".dailog").css("left",left);
	$(".dailog").css("top",top);

	var textHtml = "<hr><div style='margin-top:20px;color:#fff'>"+text+"</div>";

	$(".dailog").append(textHtml);
}

function dailogClose(){
	$(".dailog").remove();
}
	