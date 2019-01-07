/*!
 * jQuery smooth-hash-jump v1.0.0
 * Author: Fuwei Chin
 * Licence: MIT
 */
(function($){
	$.support.smoothScroll=(function(){
		var ua=navigator.userAgent;
		return (ua.indexOf("Chrome")!=-1&&ua.indexOf("Edge")==-1)||//Chrome
				ua.indexOf("Firefox")!=-1;//Firefox
	}());
	function stripHash(url){
		var index=url.indexOf("#");
		return index==-1?url:url.substring(0,index);
	}
	function getHash(url){
		var index=url.indexOf("#");
		return index==-1?"":url.substring(index);
	}
	var scrollingElement=document.scrollingElement||document.compatMode=="BackCompat"?document.body:document.documentElement;
	var settings={
		duration: 400,
		easing: $.easing.easeInOut?"easeInOut":"swing",
	};
	$(document.body).on("click",'a[href*="#"]',function(e){
		var a=this;
		if(stripHash(a.href)!=stripHash(location.href))//link targets another page
			return;
		var hash=getHash(a.getAttribute("href"));
		var assignHash=function(){
			if(hash!=location.hash)
				location.hash=hash;
		};
		if(hash=="#"){
			e.preventDefault();
			if($.support.smoothScroll){
				scrollTo({top:0,behavior:"smooth"});
				setTimeout(assignHash,settings.duration);
			}else{
				$(scrollingElement).animate({scrollTop:0},settings.duration,settings.easing,assignHash);
			}
		}else{
			var elem=document.getElementById(hash.substring(1));
			if(elem==null) //target id does not exist
				return;
			if(elem.getClientRects().length==0) //target element is hidden
				return;
			e.preventDefault();
			if($.support.smoothScroll){
				elem.scrollIntoView({block:"start",behavior:"smooth"});
				setTimeout(assignHash,settings.duration);
			}else{
				//var assignHashAsync=setTimeout.bind(window,assignHash,0);
				$(scrollingElement).animate({scrollTop:$(elem).offset().top},settings.duration,settings.easing,assignHash);
			}
		}
	});
})(jQuery);