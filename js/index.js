function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};


$(function(){

	
	$(function(){  
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  });
})



	
});
$(function () {
    $("#playbtn").click(function () {
        $("#bg").show();
        $("#mp_play").show();
		//$("#iframe")[0].src="https://v.qq.com/iframe/player.html?vid=i0530szu3jz&tiny=0&auto=1";
		$("#iframe")[0].src="https://v.qq.com/txp/iframe/player.html?vid=x0760htp3kp";
    });
	

    $("#bg,#closebtn").click(function () {
        initClose();
    });

});
function initClose() {
    $("#bg").hide();
    $("#mp_play").hide();
	$("#iframe")[0].src="";
}







$(function () {
    $(".login_btn img").click(function () {
        $("#bg").show();
        $("#mp_play1").show();
    });
	

    $("#bg,#closebtn1").click(function () {
        initClose1();
    });

});
function initClose1() {
    $("#bg").hide();
    $("#mp_play1").hide();
	
}