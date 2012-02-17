$(document).ready(function(){
	if($.browser.msie){
		if($.browser.version == "7.0"){
			var oArea = $(".area");
			var oView = $("#view");
			oArea.css("height",$("#wrap").height() + "px");
			oView.css("height",$("#wrap").height() - 1 + "px").css("height",$("#wrap").height() + 1 + "px");
			$(window).resize(function(){
				oArea.css("height",$("#wrap").height() + "px");
			})
		}
	}

	var oNav = $("#nav li");
	var oIndex = $("#index");
	var oNavSlider = $("#nav_slider");
	var navLeft = $("#nav").offset().left;
	var index = 0;
	oNav.click(function(){
		oNav.removeClass();
		$(this).addClass("current");
		oNavSlider.stop().animate({"left":$(this).offset().left - navLeft + "px"},700,"easeInOutElastic");
		index = $(this).index();
		var dh = $("#wrap").innerHeight();
		oIndex.stop().animate({"marginTop":-(index * dh) + "px"},600,"easeInOutElastic");
	});

	$(window).resize(function(){
		oIndex.stop().animate({"marginTop":-index * $("#wrap").innerHeight() + "px"},600,"easeInOutElastic");
	});
});
