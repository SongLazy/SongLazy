// JavaScript Document
$(document).ready(function(e) {
    $('.header-main2-nav li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
	});
	$('.invest-list-title ol li').click(function(){
		$(this).addClass('hover').siblings('li').removeClass('hover');
	});
	$('.invest-list-screen2 p b a').click(function(){
		$(this).toggleClass('hover');
		$(this).parent('b').siblings('.unlimited').removeClass('hover');
	});
	$('.invest-list-screen2 p .unlimited').click(function(){
		$(this).addClass('hover');
		$(this).siblings('b').children('a').removeClass('hover');
	});
	$('.invest-list-screen3 p').click(function(){
		$(this).addClass('hover').siblings('p').removeClass('hover');
	});
	$('.invest-list-table .inli-table-title a').click(function(){
		var index=$('.invest-list-table .inli-table-title a').index($(this));
		$(this).addClass('hover').siblings('a').removeClass('hover');
	   $('.inli-table-main > div').eq(index).show().siblings().hide();
	});
	
	 /*忘记密码*/
   $('.login-main-form .forget-password a').click(function(){
		$('.transparent-back').show();
		$('.login-popup1').show();
   });
   $('.login-popup1 .login-popup1-tablecen1 #emailsubmit').click(function(){
		$('.login-popup1').hide();
		$('.transparent-back').show();
		$('.login-popup2').show();
   });
   $('.login-popup2 .login-popup2-cen2 a').click(function(){
		$('.transparent-back').hide();
		$('.login-popup2').hide();
   });
   $('.login-popup1 .login-popup1-tablecen2 #phonesubmit').click(function(){
		$('.login-popup1').hide();
		$('.transparent-back').show();
		$('.login-popup3').show();
   });
   $('.login-popup3 .login-popup3-cen #phonesubmit2').click(function(){
		$('.transparent-back').hide();
		$('.login-popup3').hide();
   });
   $('.login-popup1-table ol li').click(function(){
		var index=$('.login-popup1-table ol li').index($(this));
		$(this).addClass('hover').siblings().removeClass('hover');
	    $('.login-popup1-tablecen > div').eq(index).show().siblings().hide();
   });
   /*注册*/
	/*$('.register-main-title a').click(function(){
		var index=$('.register-main-title a').index($(this));
		$(this).addClass('hover').siblings().removeClass('hover');
	    $('.register-main-form .rema-form').eq(index).show().siblings().hide();
	});*/

	$('.aflo-left-main2 dl dd').click(function(){
		$(this).addClass('hover').siblings('dd').removeClass('hover');
	});
	
	$('#register-loan-form1 .loan-form-ren a').click(function(){
		$(this).addClass('hover').siblings('').removeClass('hover');
	});
	
    $('.register-invest-form1 .submit').click(function(){
		$('.register-invest-form1').hide();
		$('.register-invest-form2').show();
	});
	$('.register-invest-form2 .last-step').click(function(){
		$('.register-invest-form1').show();
		$('.register-invest-form2').hide();
	});
	 $('.register-loan-form1 .submit').click(function(){
		$('.register-loan-form1').hide();
		$('.register-loan-form2').show();
	});
	$('.register-loan-form2 .last-step').click(function(){
		$('.register-loan-form1').show();
		$('.register-loan-form2').hide();
	});
	/*关于我们*/
	$('.about-us-left p a').click(function(){
		$(this).addClass('hover').siblings('a').removeClass('hover');
	});
   /*投资记录*/ 
   $('.record-list-main ul').hover(function(){
      $(this).toggleClass('hover')
   });
   /*帮助中心*/
   $('.help-center-table ol li a').click(function(){
		var index=$('.help-center-table ol li a').index($(this));
		$(this).addClass('hover').parent('li').siblings('li').children('a').removeClass('hover');
	    $('.hece-table-main > div').eq(index).show().siblings().hide();
   });
   $('.hece-table-main ul li h2').click(function(){
		$(this).children('.hece-table-main ul li h2 span.help-close').toggle();
		$(this).children('.hece-table-main ul li h2 span.help-open').toggle();
		$(this).siblings('.hece-table-main ul li .help-open-main').slideToggle();
   });
   /*加入我们*/
   $('.abjo-table-title li').click(function(){
		var index=$('.abjo-table-title li').index($(this));
		$(this).addClass('hover').siblings('li').removeClass('hover');
	    $('.abjo-table-cen1').eq(index).show().siblings().hide();
	});
	
	$('.abjo-table-cen1 .abjo-table-list1').click(function(){
		$(this).toggleClass('hover');
		$(this).siblings('.abjo-table-list2').slideToggle();
	});
	
	/*首页弹窗*/
	$('.new-explain-popup .neex-popup-close').click(function(){
		$('.transparent-back').hide();
		$('.new-explain-popup').hide();
	});
	$('.index-banner .slides .banner-video, .index-video').click(function(){
		$('.transparent-back').show();
		$('.index-video-popup').show();
		$('video').trigger('pause');
	});
	$('.index-video-popup .video-popup-close').click(function(){
	   $('.transparent-back').hide();
	   $('.index-video-popup').hide();
	   $('video').trigger('pause');
    });
	$('.index-scattered .product-bidding').hover(function(){
		$(this).toggleClass('hover');
	});
	$('.index-news .index-news-left .index-news-head a').hover(function(){
		var index=$('.index-news .index-news-left .index-news-head a').index($(this));
		$(this).addClass('hover').siblings('a').removeClass('hover');
	   $('.index-news .index-news-left .index-news-main > div').eq(index).show().siblings().hide();
	});
	$('.position-window ol li').hover(function(){
	   $(this).children('div').toggle();
    });
	$(window).scroll(function(){
		var a=$(document).scrollTop(),
		    b=$(window).height();
			if(a>b){
				$(".position-window .return-icon").show();
				}else{
				     $(".position-window .return-icon").hide();
	            }
     });
     $(".position-window .return-icon").click(function(){
	  $("html,body").animate({"scrollTop":0},"slow")
     })
	/*专享;弹窗*/
	$('.invest-plan-product a.btn-color').click(function(){
		$('.transparent-back').show();
		$('.invest-plan-popup').show();
	});
	$('.invest-move-bidding a.btn-color, .invest-move-product a.btn-color').click(function(){
		$('.transparent-back').show();
		$('.invest-move-popup').show();
	});
	$('.invest-exclusive-popup .exclusive-popup-close').click(function(){
		$('.transparent-back').hide();
		$('.invest-exclusive-popup').hide();
	});
	/*转让标*/
	$('.invest-move-popup2 h1 b').click(function(){
		$('.transparent-back').hide();
		$('.invest-move-popup2').hide();
	});
	$('.invest-list-bidding .product-bidding').hover(function(){
		$(this).toggleClass('hover');
	});
	$('.invest-fixed-bidding .invest-plan-product > div').hover(function(){
		$(this).toggleClass('hover');
	});
	$('.new-product-bidding').hover(function(){
		$(this).toggleClass('hover');
	});
	/*计划宝分散投资工具-列表页*/
	$('.invest-fixed-bidding .plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-product .plan-tool-checkbox a').click(function(){
		$(this).addClass('hover').siblings('a').removeClass('hover');
	});
	$('.invest-fixed-bidding .plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-bg .plan-tool-checkbox').click(function(){
		$(this).addClass('hover').siblings('.plan-tool-checkbox').removeClass('hover');
	});
	$('.plan-product-tool .plan-tool-main2 .plantool-main2-number .icon').hover(function(){
		$('.plan-product-tool .plan-tool-main2 .plantool-main2-popup').toggle();
	});
	$('.plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-money input').focus(function(){
		$('.plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-money  .plantoolform-money-popup').show();
	});
	$('.plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-money input').blur(function(){
		$('.plan-product-tool .plan-tool-main .plan-tool-main1 .plantoolform-money  .plantoolform-money-popup').hide();
	});
	$('.invest-list-plan .plan-list-main2 .plan-list-btn').click(function(){
		$('.transparent-back').show();
		$('.plan-list-popup').show();
	   $(".plan-matching-product2").xb_scroll();
		 setTimeout(function () {
			  $(".plan-list-popup .product-bidding-btn1").hide();
			  $(".plan-list-popup .product-bidding-btn2").show();
			  $(".plan-list-popup .tender-loading").hide();
			  $(".plan-list-popup .plan-list-success p").show();
		 }, 4250);
		$('body').css({ 
             "overflow-y":"hidden"       
        });
	});
});