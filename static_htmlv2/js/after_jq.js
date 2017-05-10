// JavaScript Document

$(document).ready(function(e) {
  /*dengluhou*/
   $('.aflo-left-main2 dl dd').click(function(){
    $(this).addClass('hover').siblings('dd').removeClass('hover');
   });

/*zhuangtai*/
   $(function(){
      checkBox.init();
   })
   $('.radioSub').click(function(){
	  checkBox.clikFunction($(this));
   });
   var checkBox = {
      'speed':500,
      init:function(){
		var speed = this.speed;
		var radio = $('.radio');
		for(var i=0;i<radio.length;i++){
		  if($(radio[i]).prop('checked')){
			$(radio[i]).parent('.radioSub').removeClass('radioSub_on').removeClass('radioSub_off').addClass('radioSub_on');
		  }else{
			$(radio[i]).parent('.radioSub').removeClass('radioSub_on').removeClass('radioSub_off').addClass('radioSub_off');
			$(radio[i]).siblings('.cicle_btn').animate({right:53+'px'},speed);
			$(radio[i]).siblings('.off_right').fadeIn(speed);
			$(radio[i]).siblings('.on_left').fadeOut(speed);
		  }
		}
  },
  clikFunction:function(thisDOM){
    var speed = this.speed;
    if(thisDOM.hasClass('radioSub_on')){
      thisDOM.removeClass('radioSub_on').addClass('radioSub_off');
      thisDOM.find('.cicle_btn').animate({right:53+'px'},speed);
      thisDOM.find('.off_right').fadeIn(speed);
      thisDOM.find('.on_left').fadeOut(speed);
      this.checkFunction(thisDOM,'off');
    }else{
      thisDOM.removeClass('radioSub_off').addClass('radioSub_on');
      thisDOM.find('.cicle_btn').animate({right:1+'px'},speed);
      thisDOM.find('.on_left').fadeIn(speed);
      thisDOM.find('.off_right').fadeOut(speed);
      this.checkFunction(thisDOM,'on');
    }
  },
  checkFunction:function(thisDom,state){
    if(state=='on'){
      $(thisDom).find('.radio').prop('checked',true);
    }else{
      $(thisDom).find('.radio').prop('checked',false);
    }
  },

}

/*tanchuang*/
  $('.after-account-popup h2 b').click(function(){
    $('.after-account-popup').hide();
    $('.transparent-back').hide();
  });

  $('.after-automatic-popup .afau-popup-cen3 a').click(function(){
    $('.after-automatic-popup').hide();
    $('.transparent-back').hide();
  });

 /*youce-com*/
  $('.aflo-right-common .aflo-right-title ul li').click(function(){
      var index=$('.aflo-right-common ul li').index($(this));
    $(this).addClass('hover').siblings().removeClass('hover');
    $('.aflo-right-main > div').eq(index).show().siblings().hide();
  });
  /*touzijilu*/
  $('.aflo-right-main .aflori-main1-list').hover(function(){
    $(this).toggleClass('hover')
  });
  
  /*yinhangka*/
  $('.after-bank-main .after-bank-img').hover(function(){
		$(this).find('.afba-img-cen2').slideToggle();
  });
   $('.after-bank-img .afba-img-cen2 span').click(function(){
		$('.afba-popup-amend').show();
		$('.transparent-back').show();
  });
   $('.after-bank-img .afba-img-cen2 b').click(function(){
		$('.afba-popup-add').show();
		$('.transparent-back').show();
  });
  $('.after-bank-add').click(function(){
		$('.afba-popup-binding').show();
		$('.transparent-back').show();
  }); 
  $('#popup-cancel').click(function(){
		$('.afba-popup-add').hide();
		$('.transparent-back').hide();
  });
  $('.after-bank-popup h3, .after-bank-popup #popup-cancel').click(function(){
		$('.after-bank-popup').hide();
		$('.transparent-back').hide();
  });
  $('.afba-popup-add #popup-cancel').click(function(){
		$('.afba-popup-add').hide();
		$('.transparent-back').hide();
  });
  $('.afba-popup-amend ol li').click(function(){
	  	var index=$('.afba-popup-amend ol li').index($(this));
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.afbapo-amend-form > div').eq(index).show().siblings().hide();
  });
  /*chongzhi*/
  $('.afpari-main2-cen1 .afpari-main2-bankimg p').click(function(){
	  	var index=$('.afpari-main2-cen1 .afpari-main2-bankimg p').index($(this));
		$(this).find('b').addClass('hover').parent('label').parent('p').siblings('p').children('label').children('b').removeClass('hover');
		$('.afpari-main2-bankmain > div').eq(index).show().siblings().hide();
  });
  
  $('.afpari-cen1-bank .after-bank-img').hover(function(){
		/*$(this).toggleClass('hover');*/
		$(this).find('.afpa-img-cen2').toggle();
  });
  
  $('.afpari-cen1-bank .after-bank-img').click(function(){
		$(this).addClass('hover').siblings('.after-bank-img').removeClass('hover');
  });
  $('.after-pay-main .after-pay-main4 .pull-right').click(function(){
		$(this).find('b').toggleClass('hover');
		$('.afpa-main4-cen2').slideToggle();
  });
  
  
  /*jibenxinxi*/
  $('.after-info-right .after-info-title ol li').click(function(){
	  	var index=$('.after-info-right .after-info-title ol li').index($(this));
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.after-info-main > div').eq(index).show().siblings().hide();
  });
  $('.after-info-main1 .afin-main1-cen4 .email-no-binding .email-binding').click(function(){
		$('.afin-popup-email').show();
		$('.transparent-back').show();
  });
   $('.afin-popup-email .afin-popup-cancel').click(function(){
		$('.afin-popup-email').hide();
		$('.transparent-back').hide();
  });
   $('.afin-popup-email .demo2').click(function(){
		$('.afin-popup-email').hide();
		$('.transparent-back').hide();
  });
  $('.after-info-main1 .afin-main1-cen4 .phone-no-binding .phone-binding').click(function(){
		$('.afin-popup-phone').show();
		$('.transparent-back').show();
  });
   $('.afin-popup-phone #afinephonesubmit').click(function(){
		$('.afin-popup-phone #afinephonesubmit').hide();
		$('.afin-popup-phone .afin-popup-used').show();
		$('.afin-popup-phone .afinpo-phone-validate').show();
  });
  $('.afin-popup-phone .afin-popup-cancel').click(function(){
		$('.afin-popup-phone').hide();
		$('.transparent-back').hide();
  });
 

  /*user*/
  $('.afin-main1-cen2 .user-changes').click(function(){
		$('.afin-popup-user').show();
		$('.transparent-back').show();
  }); 
  $('.afin-popup-user .afinpo-form-btn1').click(function(){
		$('.afin-popup-user').hide();
		$('.transparent-back').hide();
  });
   $('.afin-popup-user .afinpo-form-btn2').click(function(){
	    $('.afin-popup-user').hide();
		$('.transparent-back').hide();
  });

  /*password*/
  $('.afin-main1-cen2 .login-changes').click(function(){
		$('.afin-popup-password').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-password .afinpo-form-btn1').click(function(){
		$('.afin-popup-password').hide();
		$('.transparent-back').hide();
  });
  $('.afin-popup-password .afinpo-form-btn2').click(function(){
	    $('.afin-popup-password').hide();
		$('.transparent-back').hide();
  });
  
  /*setpw*/
  $('.afin-main1-cen2 .trade-set').click(function(){
		$('.afin-popup-setpw').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-setpw .afinpo-form-btn1').click(function(){
		$('.afin-popup-setpw').hide();
		$('.transparent-back').hide();
  });
  $('.afin-popup-setpw .afinpo-form-btn2').click(function(){
	    $('.afin-popup-setpw').hide();
		$('.transparent-back').hide();
  });

  /*changespw*/
  $('.afin-main1-cen2 .trade-changes').click(function(){
		$('.afin-popup-changespw').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-changespw .afinpo-form-btn1').click(function(){
		$('.afin-popup-changespw').hide();
		$('.transparent-back').hide();
  });
  $('.afin-popup-changespw .afinpo-form-btn2').click(function(){
	    $('.afin-popup-changespw').hide();
		$('.transparent-back').hide();
  });
  /*backpw*/
  $('.afin-main1-cen2 .trade-back').click(function(){
		$('.afin-popup-backpw').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-backpw .afinpo-form-btn1').click(function(){
		$('.afin-popup-backpw').hide();
		$('.transparent-back').hide();
  });
  $('.afin-popup-backpw .afinpo-form-btn2').click(function(){
	    $('.afin-popup-backpw').hide();
		$('.transparent-back').hide();
  });
 /*jumenshenfen*/
  $('.afin-main1-cen3 .land-people').click(function(){
		$('.afin-popup-land').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-land .afinpo-form-btn2').click(function(){
		$('.afin-popup-land').hide();
		$('.transparent-back').hide();
		$('.resident-no-set').hide();
		$('.resident-yes-set').show();
  });
   $('.afin-main1-cen3 .foreign-people').click(function(){
		$('.afin-popup-foreign').show();
		$('.transparent-back').show();
  });
  $('.afin-popup-foreign .afinpo-form-btn2').click(function(){
		$('.afin-popup-foreign').hide();
		$('.transparent-back').hide();
		$('.resident-no-set').hide();
		$('.resident-yes-set').show();
  });
  /*zhaiquanzhuanrang*/
  $('.after-transfer-main2 .record-list-main ul li .see-repayment-status').click(function(){
		$('.repayment-status-popup').show();
		$('.transparent-back').show();
  });
  $('.repayment-status-popup .rest-popup-close b').click(function(){
		$('.repayment-status-popup').hide();
		$('.transparent-back').hide();
  });
  $('.after-transfer-main2 .aflo-right-main1 .record-list-main ul li.handle a.btn-color2').click(function(){
		$('.after-transfer-popup').show();
		$('.transparent-back').show();
  });
  $('.after-transfer-main2 .aflo-right-main2 .record-list-main ul li.handle a.btn-color3').click(function(){
		$('.cancel-transfer-popup').show();
		$('.transparent-back').show();
  });
  $('.aftr-popup-common h1 b').click(function(){
		$('.aftr-popup-common').hide();
		$('.transparent-back').hide();
  });
  $('.after-transfer-main2 .aflo-right-main3 .record-list-main ul.record-list-main2 li.handle').hover(function(){
	$(this).children('.after-transfer-main2 .aflo-right-main3 .record-list-main ul.record-list-main2 li.handle .transfer-creditor').toggle();
  });
  /*xiangqing*/
  /*$('.product-details1 .product-details1-right .prode1-right-buy').click(function(){
		$('.transparent-back').show();
		$('.invest-details-popup1').show();
  });
  $('.invest-details-popup .inde-popup-commain4 .btn-color3, .invest-details-popup h1 b').click(function(){
		$('.transparent-back').hide();
		$('.invest-details-popup1').hide();
  });*/
  $('.product-details1 .product-details1-right .prode1-right-buy').click(function(){
		$('.transparent-back').show();
		$('.mode-secret-popup').show();
  });
  $('.mode-secret-popup .mode-secret-main3 .btn-color3').click(function(){
		$('.transparent-back').hide();
		$('.mode-secret-popup').hide();
  });
  $('.after-transfer-popup .aftr-popup-cen3 .transfer-verification-switch').click(function(){
		$('.after-transfer-popup .transfer-login-phone').toggle();
		$('.after-transfer-popup .transfer-login-password').toggle();
  });
  $('.cancel-transfer-popup .aftr-popup-cen1 .transfer-verification-switch').click(function(){
		$('.cancel-transfer-popup .transfer-login-phone').toggle();
		$('.cancel-transfer-popup .transfer-login-password').toggle();
  });
 /*xianjinquan*/
 $('.cash-coupon-right .caco-right-main1 .caco-main1-title a').click(function(){
	 var index=$('.cash-coupon-right .caco-right-main1 .caco-main1-title a').index($(this));
	$(this).addClass('hover').siblings().removeClass('hover');
	$('.cash-coupon-right .caco-right-main1 .caco-main1-content > div').eq(index).show().siblings().hide();
 });
 /*yaoqinghaoyou*/
 $('.invite-friends-table .infr-table-title a').click(function(){
	var index=$('.invite-friends-table .infr-table-title a').index($(this));
	$(this).addClass('hover').siblings().removeClass('hover');
	$('.invite-friends-table .infr-table-main > div').eq(index).show().siblings().hide();
 });
 /*投资状况*/
/* $('.after-invest-right .after-invest-main2 ul li.need-money b.coupon-icon').hover(function(){
	$(this).parent().siblings('.after-invest-right .after-invest-main2 ul li.need-money .afin-coupon-popup').toggle();
 });*/
 $('.after-invest-right .after-invest-main2 ul li.need-money').hover(function(){
	$(this).children('.after-invest-right .after-invest-main2 ul li.need-money .afin-coupon-popup').toggle();
 });
 $('.after-trade-right .after-trade-main2 .aflo-right-main1 ul li.trade-money b.coupon-icon').hover(function(){
	$(this).parent().siblings('.after-trade-right .after-trade-main2 .aflo-right-main1 ul li.trade-money .afin-coupon-popup').toggle();
 });
 $('.after-invest-right .after-invest-main2 .aflo-right-main4 .aflori-main4-cen1 ul.aflori-main1-list li a').click(function(){
		$('.afin-plan-details').show();
		$('.transparent-back').show();
 });
 $('.afin-plan-details .record-list .afin-plan-return a').click(function(){
		$('.afin-plan-details').hide();
		$('.transparent-back').hide();
 });
 /*提现*/
 $('.withdrawals-popup-main .withdrawals-popup-close').click(function(){
		$('.withdrawals-popup').hide();
		$('.transparent-back').hide();
 });
 $('.after-withdraw-right .aflo-right2-cen h1 .afwi-btn-detail').click(function(){
		$('.withdrawals-detail-popup').show();
		$('.transparent-back').show();
 });
 $('.withdrawals-detail-popup .wide-popup-close b').click(function(){
		$('.withdrawals-detail-popup').hide();
		$('.transparent-back').hide();
 });
 /*账户*/
 $('.after-account-main4 .afac-main4-cen > div a').hover(function(){
    $(this).children('p').toggle();
 });
 /*债权转让筛选*/
 $(".after-transfer-screen #select1 dd a").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		var copyThisA = $(this).clone();
		if ($(".after-transfer-screen #selectA").length > 0) {
			$(".after-transfer-screen #selectA").html($(this).text());
		} else {
			$(".after-transfer-screen .select-result dl dd").append(copyThisA.attr("id", "selectA"));
		}
 });
	
 $(".after-transfer-screen #select2 dd a").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
	    var copyThisB = $(this).clone();
	    if ($(".after-transfer-screen #selectB").length > 0) {
		   $(".after-transfer-screen #selectB").html($(this).text());
		} else {
			$(".after-transfer-screen .select-result dl dd").append(copyThisB.attr("id", "selectB"));
		}
 });
	
 $(".after-transfer-screen #select3 dd a").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		var copyThisC = $(this).clone();
		if ($(".after-transfer-screen #selectC").length > 0) {
			$(".after-transfer-screen #selectC").html($(this).text());
		} else {
			$(".after-transfer-screen .select-result dl dd").append(copyThisC.attr("id", "selectC"));
		}
 });
});
