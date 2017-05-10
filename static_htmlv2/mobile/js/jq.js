// JavaScript Document

$(document).ready(function(e) {
    $('.invest-list-nav li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
	});
	$('.footer li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
	});
	$('.invest-scattered-screen p').click(function(){
		$(this).addClass('hover').siblings('p').removeClass('hover');
	});
	/*$('.account-main2 a').click(function(){
		$(this).addClass('hover').siblings('a').removeClass('hover');
	});*/
	$('.bid-details-main4 .bide-main4-list > p').click(function(){
		$(this).toggleClass('hover');
		$(this).siblings(".bide-main4-hidden").slideToggle();
	});
	$('.team-main-data .team-data-arrow').click(function(){
		$('.team-data-arrow').toggleClass('hover');
		$(this).siblings('.team-data-introduce2').slideToggle();
	});
	$('.my-invest-new li a').click(function(){
		$('.my-invest-new li a').toggleClass('hover');
		$('.myin-new-main').slideToggle();
	});
	/*现金券*/
	$('.cash-coupon-nav li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
	});
	/*邀请好友*/
	$('.infr-invite-way .infr-inway-btn').click(function(){
		$('.share-friends-circle').show();
	});
	/*注册*/
	$('.register-download-btn p').click(function(){
		$('.register-download-app').show();
	});
	/*债权转让*/
	$('.transfer-buy-main2 .transfer-buy-btn').click(function(){
		$('.transparent-back').show();
		$('.transfer-buy-popup1').show();
	});
	$('.transfer-buy-popup1 .trbu-popup-main2 .trbu-popup-btn1').click(function(){
		$('.transparent-back').hide();
		$('.transfer-buy-popup1').hide();
	});
	$('.credits-transfer-btn').click(function(){
		$('.transparent-back').show();
		$('.credits-transfer-popup1').show();
	});
	$('.credits-transfer-popup1 .crtr-popup-main2 a.crtr-popup-btn2').click(function(){
		$('.transparent-back').show();
		$('.credits-transfer-popup2').show();
	});
	$('.credits-transfer-btn').click(function(){
		$('.transparent-back').show();
		$('.cancel-transfer-popup1').show();
	});
	$('.cancel-transfer-popup1 .crtr-popup-main2 a.crtr-popup-btn2').click(function(){
		$('.transparent-back').show();
		$('.cancel-transfer-popup2').show();
	});
	$('.no-transfer-main .trade-list ul').click(function(){
		$('.transparent-back').show();
		$('.credits-transfer-popup').show();
	});
	$('.credits-transfer-popup .crtr-popup-main2 a.crtr-popup-btn1, .credits-transfer-popup2 .crtr-popup-main2 a.crtr-popup-btn2, .cancel-transfer-popup2 .crtr-popup-main2 a.crtr-popup-btn2, .no-transfer-popup .crtr-popup-main2 a.crtr-popup-btn2').click(function(){
		$('.transparent-back').hide();
		$('.credits-transfer-popup').hide();
	});
	$('.credits-transfer-switch .switch-verification').click(function(){
		$('.credits-transfer-password').toggle();
		$('.credits-transfer-phone').toggle();
	});
	/*视频*/
	$('.money-register-introduce7 .introduce-main').click(function(){
		$('.register-video').show();
	});
	$('.register-video .video-popup-close').click(function(){
		$('.register-video').hide();
		$('.register-video video').trigger('pause');
	});
	/*筛选*/
	$('.transferable-credits-screen, .plan-list-screen').click(function(){
		$('.transparent-back').show();
	    $('.screen-main').animate({right:0},500);
	});
	$('.screen-main .screen-btn, .screen-transparent').click(function(){
		$('.transparent-back').hide();
	    $('.screen-main').animate({right:-500},500);
	});
	$('.screen-main .screen-center-condition a').click(function(){
		$(this).addClass('hover').siblings('a').removeClass('hover');
	});
	/*计划宝筛选*/
	$('.plan-details-main2 .plde-main2-screen a').click(function(){
		$(this).addClass('hover').siblings('a').removeClass('hover');
	});
});
