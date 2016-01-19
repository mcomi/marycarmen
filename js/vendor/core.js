var Core = (function(Core){
	"use strict";

	Core = {

		/**
		** static constants
		**/
		ANIMATIONEND : "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
		TRANSITIONEND : "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
		ISTOUCH : $('html').hasClass('md_touch'),
		TRANSITIONSUPPORTED : $('html').hasClass('md_csstransitions'),
		XHRLEVEL2 : !!window.FormData,

		helpers : {

			/**
			**	find the maximum height
			**/
			sameheight : function(){

				var $this = $(this), max = 0;

				$this.find('.owl-item').children().css('height','auto').each(function(){

					max = Math.max( max, $(this).outerHeight() );

				}).promise().done(function(){

					$this.find('.owl-item').children().css('height', max);

				});

			},

			/**
			**	Get first and last visible elements in carousel
			**/
			owlGetVisibleElements : function(){

				var $this = $(this);

				$this.find('.owl-item').removeClass('first last');
				$this.find('.owl-item.active').first().addClass('first');
				$this.find('.owl-item.active').last().addClass('last');

			}

		}

	};

	Core.extend();

	$(document).ready(function(){
		Core.afterDOMReady();
	});

	$(window).load(function(){
		Core.afterWindowLoaded();
	});

	return Core;

}(Core || {}));