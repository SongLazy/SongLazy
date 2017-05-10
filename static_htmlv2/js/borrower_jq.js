// JavaScript Document

$(document).ready(function(e) {
 $(".boho-carousel-main ul").width(722*$(".boho-carousel-main ul li").length);
 	var ul=$(".boho-carousel-main ul")
	$(".borrower-home-carousel .right-btn").click(function(){
		ul.css({"left":0});
		ul.not(":animated").animate({"left":-722},500);
		$(".boho-carousel-main ul li:first").appendTo(ul);
	});
	$(".borrower-home-carousel .left-btn").click(function(){
		ul.css({"left":-722});
		ul.not(":animated").animate({"left":0},500);
		$(".boho-carousel-main ul li:last").prependTo(ul)
   });
  
  $('.payments-main1-progress a.btn-color, .payments-main3-money a.btn-color, .detailed-main3-info2 a.btn-color').click(function(){
		$('.transparent-back').show();
		$('.borrower-popup').show();
  });
  $('.borrower-popup h1 b').click(function(){
		$('.transparent-back').hide();
		$('.borrower-popup').hide();
  });
  $('.borrower-data-main .borrower-data-filed li a').click(function(){
	  $(this).parent('li').hide();
  });
  $('.borrower-inform-title ol li').click(function(){
		var index=$('.borrower-inform-title ol li').index($(this));
		$(this).addClass('hover').siblings('li').removeClass('hover');
		$('.borrower-inform-main > div').eq(index).show().siblings().hide();
  });
  /*zhanghuxiugai*/
   $('.revise-bankname-withhold p a.reba-withhold-btndelete').click(function(){
		$(this).parent().parent('.revise-bankname-withhold').hide();
  });
  $('.revise-bankname-withhold p span').click(function(){
		$('.transparent-back').show();
		$('.borrower-revise-popup1').show();
  });
  $('.revise-bankname-withhold p a.reba-withhold-btnamend').click(function(){
		$('.transparent-back').show();
		$('.borrower-revise-popup3').show();
  });
  $('.borrower-revise-main1 ol li.revise-bankadd').click(function(){
		$('.transparent-back').show();
		$('.borrower-revise-popup2').show();
  });
  $('.borrower-revise-popup h1 b').click(function(){
		$('.transparent-back').hide();
		$('.borrower-revise-popup').hide();
  });
  $('.payment-popup h1 b').click(function(){
		$('.transparent-back').hide();
		$('.payment-popup').hide();
  });
  
  /*daiqianhetong*/
  $('.contract-open-account #contractopacsubmit').click(function(){
		$('.transparent-back').show();
		$('.borrower-contract-popup1').show();
  });
  $('.borrower-contract-popup1 .btn-color').click(function(){
		$('.transparent-back').hide();
		$('.borrower-contract-popup1').hide();
  });
  /*zhaobiaozhuangtai*/
   $('.borrower-bidstatus-main .borrower-home-comlist ul li .bidstatus-view-details').hover(function(){
		$(this).children('.bidstatus-viewdetails-main').toggle();
  });
});
