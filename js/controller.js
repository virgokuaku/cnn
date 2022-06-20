// ========================================== PLUGIN ====================================
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.2
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n,l,r=this;if(r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1},i.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.hidden="hidden",r.paused=!1,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=i(e),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,s=i(e).data("slick")||{},r.options=i.extend({},r.defaults,s,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,n=r.options.responsive||null,n&&n.length>-1){r.respondTo=r.options.respondTo||"window";for(l in n)n.hasOwnProperty(l)&&(r.breakpoints.push(n[l].breakpoint),r.breakpointSettings[n[l].breakpoint]=n[l].settings);r.breakpoints.sort(function(i,e){return r.options.mobileFirst===!0?i-e:e-i})}"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=i.proxy(r.autoPlay,r),r.autoPlayClear=i.proxy(r.autoPlayClear,r),r.changeSlide=i.proxy(r.changeSlide,r),r.clickHandler=i.proxy(r.clickHandler,r),r.selectHandler=i.proxy(r.selectHandler,r),r.setPosition=i.proxy(r.setPosition,r),r.swipeHandler=i.proxy(r.swipeHandler,r),r.dragHandler=i.proxy(r.dragHandler,r),r.keyHandler=i.proxy(r.keyHandler,r),r.autoPlayIterator=i.proxy(r.autoPlayIterator,r),r.instanceUid=t++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.init(),r.checkResponsive(!0)}var t=0;return e}(),e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.asNavFor=function(e){var t=this,o=null!==t.options.asNavFor?i(t.options.asNavFor).slick("getSlick"):null;null!==o&&o.slideHandler(e,!0)},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&i.paused!==!0&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this;i.options.infinite===!1?1===i.direction?(i.currentSlide+1===i.slideCount-1&&(i.direction=0),i.slideHandler(i.currentSlide+i.options.slidesToScroll)):(i.currentSlide-1===0&&(i.direction=1),i.slideHandler(i.currentSlide-i.options.slidesToScroll)):i.slideHandler(i.currentSlide+i.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow=i(e.options.prevArrow),e.$nextArrow=i(e.options.nextArrow),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.appendTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled"))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),e.$slidesCache=e.$slides,e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(e.options.centerMode===!0||e.options.swipeToSlide===!0)&&(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.options.accessibility===!0&&e.$list.prop("tabIndex",0),e.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,l,r=this;if(o=document.createDocumentFragment(),n=r.$slider.children(),r.options.rows>1){for(l=r.options.slidesPerRow*r.options.rows,s=Math.ceil(n.length/l),i=0;s>i;i++){var d=document.createElement("div");for(e=0;e<r.options.rows;e++){var a=document.createElement("div");for(t=0;t<r.options.slidesPerRow;t++){var c=i*l+(e*r.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}r.$slider.html(o),r.$slider.children().children().children().width(100/r.options.slidesPerRow+"%").css({display:"inline-block"})}},e.prototype.checkResponsive=function(e){var t,o,s,n=this,l=n.$slider.width(),r=window.innerWidth||i(window).width();if("window"===n.respondTo?s=r:"slider"===n.respondTo?s=l:"min"===n.respondTo&&(s=Math.min(r,l)),n.originalSettings.responsive&&n.originalSettings.responsive.length>-1&&null!==n.originalSettings.responsive){o=null;for(t in n.breakpoints)n.breakpoints.hasOwnProperty(t)&&(n.originalSettings.mobileFirst===!1?s<n.breakpoints[t]&&(o=n.breakpoints[t]):s>n.breakpoints[t]&&(o=n.breakpoints[t]));null!==o?null!==n.activeBreakpoint?o!==n.activeBreakpoint&&(n.activeBreakpoint=o,"unslick"===n.breakpointSettings[o]?n.unslick():(n.options=i.extend({},n.originalSettings,n.breakpointSettings[o]),e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh()),n.$slider.trigger("breakpoint",[n,o])):(n.activeBreakpoint=o,"unslick"===n.breakpointSettings[o]?n.unslick():(n.options=i.extend({},n.originalSettings,n.breakpointSettings[o]),e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh()),n.$slider.trigger("breakpoint",[n,o])):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,n.options=n.originalSettings,e===!0&&(n.currentSlide=n.options.initialSlide),n.refresh(),n.$slider.trigger("breakpoint",[n,o]))}},e.prototype.changeSlide=function(e,t){var o,s,n,l=this,r=i(e.target);switch(r.is("a")&&e.preventDefault(),n=l.slideCount%l.options.slidesToScroll!==0,o=n?0:(l.slideCount-l.currentSlide)%l.options.slidesToScroll,e.data.message){case"previous":s=0===o?l.options.slidesToScroll:l.options.slidesToShow-o,l.slideCount>l.options.slidesToShow&&l.slideHandler(l.currentSlide-s,!1,t);break;case"next":s=0===o?l.options.slidesToScroll:o,l.slideCount>l.options.slidesToShow&&l.slideHandler(l.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||i(e.target).parent().index()*l.options.slidesToScroll;l.slideHandler(l.checkNavigable(d),!1,t);break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).off("click.slick",e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).off("mouseenter.slick",i.proxy(e.setPaused,e,!0)).off("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.$list.off("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.html(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(){var e=this;e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),i(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&"object"!=typeof e.options.prevArrow&&e.$prevArrow.remove(),e.$nextArrow&&"object"!=typeof e.options.nextArrow&&e.$nextArrow.remove(),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized")},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:1e3}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:1e3}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)for(;e<i.slideCount;)++o,e=t+i.options.slidesToShow,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToShow,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=s.options.vertical===!1?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,s.options.variableWidth===!0&&(o=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=o[0]?-1*o[0].offsetLeft:0,s.options.centerMode===!0&&(o=s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?(i=e.slideCount-e.options.slidesToShow+1,e.options.centerMode===!0&&(i=e.slideCount)):(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);i>t;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s=this;return o=s.options.centerMode===!0?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,s.options.swipeToSlide===!0?(s.$slideTrack.find(".slick-slide").each(function(e,n){return n.offsetLeft-o+i(n).outerWidth()/2>-1*s.swipeLeft?(t=n,!1):void 0}),e=Math.abs(i(t).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(){var e=this;i(e.$slider).hasClass("slick-initialized")||(i(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots()),e.$slider.trigger("init",[e])},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.setPaused,e,!0)).on("mouseleave.slick",i.proxy(e.setPaused,e,!1))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.$list.on("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),i.options.autoplay===!0&&i.autoPlay()},e.prototype.keyHandler=function(i){var e=this;37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}})},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:1},200)},o.src=t,e.css({opacity:0}).attr("src",t).removeAttr("data-lazy").removeClass("slick-loading")})}var t,o,s,n,l=this;l.options.centerMode===!0?l.options.infinite===!0?(s=l.currentSlide+(l.options.slidesToShow/2+1),n=s+l.options.slidesToShow+2):(s=Math.max(0,l.currentSlide-(l.options.slidesToShow/2+1)),n=2+(l.options.slidesToShow/2+1)+l.currentSlide):(s=l.options.infinite?l.options.slidesToShow+l.currentSlide:l.currentSlide,n=s+l.options.slidesToShow,l.options.fade===!0&&(s>0&&s--,n<=l.slideCount&&n++)),t=l.$slider.find(".slick-slide").slice(s,n),e(t),l.slideCount<=l.options.slidesToShow?(o=l.$slider.find(".slick-slide"),e(o)):l.currentSlide>=l.slideCount-l.options.slidesToShow?(o=l.$slider.find(".slick-cloned").slice(0,l.options.slidesToShow),e(o)):0===l.currentSlide&&(o=l.$slider.find(".slick-cloned").slice(-1*l.options.slidesToShow),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.paused=!1,i.autoPlay()},e.prototype.postSlide=function(i){var e=this;e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay()},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,t,o=this;e=i("img[data-lazy]",o.$slider).length,e>0&&(t=i("img[data-lazy]",o.$slider).first(),t.attr("src",t.attr("data-lazy")).removeClass("slick-loading").load(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad(),o.options.adaptiveHeight===!0&&o.setPosition()}).error(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad()}))},e.prototype.refresh=function(){var e=this,t=e.currentSlide;e.destroy(),i.extend(e,e.initials),e.init(),e.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,o.slideCount<1||0>i||i>o.slideCount-1?!1:(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:800,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:800,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:900,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(i,e,t){var o=this;o.options[i]=e,t===!0&&(o.unload(),o.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&i.options.useCSS===!0&&(i.cssTransitions=!0),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;n.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),t=n.$slider.find(".slick-slide"),n.options.centerMode===!0?(e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.setPaused=function(i){var e=this;e.options.autoplay===!0&&e.options.pauseOnHover===!0&&(e.paused=i,i?e.autoPlayClear():e.autoPlay())},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?(t.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),t.$slides.eq(s).addClass("slick-active").attr("aria-hidden","false"),t.options.centerMode===!0&&(t.$slider.find(".slick-slide").removeClass("slick-center"),t.$slides.eq(s).addClass("slick-center")),void t.asNavFor(s)):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,l,r=null,d=this;return e=e||!1,d.animating===!0&&d.options.waitForAnimate===!0||d.options.fade===!0&&d.currentSlide===i||d.slideCount<=d.options.slidesToShow?void 0:(e===!1&&d.asNavFor(i),o=i,r=d.getLeft(o),l=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?l:d.swipeLeft,d.options.infinite===!1&&d.options.centerMode===!1&&(0>i||i>d.getDotCount()*d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o))):d.options.infinite===!1&&d.options.centerMode===!0&&(0>i||i>d.slideCount-d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o))):(d.options.autoplay===!0&&clearInterval(d.autoPlayTimer),s=0>o?d.slideCount%d.options.slidesToScroll!==0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!==0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,s]),n=d.currentSlide,d.currentSlide=s,d.setSlideClasses(d.currentSlide),d.updateDots(),d.updateArrows(),d.options.fade===!0?(t!==!0?d.fadeSlide(s,function(){d.postSlide(s)}):d.postSlide(s),void d.animateHeight()):void(t!==!0?d.animateSlide(r,function(){d.postSlide(s)}):d.postSlide(s))))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?s.options.rtl===!1?"left":"right":360>=o&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&225>=o?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&135>=o?"left":"right":"vertical"},e.prototype.swipeEnd=function(i){var e,t=this;if(t.dragging=!1,t.swiping=!1,t.scrolling)return t.scrolling=!1,!1;if(t.shouldClick=t.touchObject.swipeLength>10?!1:!0,void 0===t.touchObject.curX)return!1;if(t.touchObject.edgeHit===!0&&t.$slider.trigger("edge",[t,t.swipeDirection()]),t.touchObject.swipeLength>=t.touchObject.minSwipe&&("left"==t.swipeDirection()||"right"==t.swipeDirection()))switch(t.swipeDirection()){case"left":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide+t.getSlideCount()):t.currentSlide+t.getSlideCount(),t.slideHandler(e),t.currentDirection=0,t.touchObject={},t.$slider.trigger("swipe",[t,"left"]);
break;case"right":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide-t.getSlideCount()):t.currentSlide-t.getSlideCount(),t.slideHandler(e),t.currentDirection=1,t.touchObject={},t.$slider.trigger("swipe",[t,"right"])}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),t.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,l,r=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!r.dragging||r.scrolling||n&&1!==n.length?!1:(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,r.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),l=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2))),!r.options.verticalSwiping&&!r.swiping&&l>4?(r.scrolling=!0,!1):(r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=l),t=r.swipeDirection(),void 0!==i.originalEvent&&r.touchObject.swipeLength>4&&(r.swiping=!0,i.preventDefault()),s=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),o=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===t||r.currentSlide>=r.getDotCount()&&"left"===t)&&(o=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.options.vertical===!1?r.swipeLeft=e+o*s:r.swipeLeft=e+o*(r.$list.height()/r.listWidth)*s,r.options.verticalSwiping===!0&&(r.swipeLeft=e+o*s),r.options.fade===!0||r.options.touchMove===!1?!1:r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft)))},e.prototype.swipeStart=function(i){var e,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&"object"!=typeof e.options.prevArrow&&e.$prevArrow.remove(),e.$nextArrow&&"object"!=typeof e.options.nextArrow&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(){var i=this;i.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.options.infinite!==!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.removeClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;document[i.hidden]?(i.paused=!0,i.autoPlayClear()):i.options.autoplay===!0&&(i.paused=!1,i.autoPlay())},i.fn.slick=function(){var i,t=this,o=arguments[0],s=Array.prototype.slice.call(arguments,1),n=t.length,l=0;for(l;n>l;l++)if("object"==typeof o||"undefined"==typeof o?t[l].slick=new e(t[l],o):i=t[l].slick[o].apply(t[l].slick,s),"undefined"!=typeof i)return i;return t}});

/*s:liquid*/
var imgLiquid=imgLiquid||{VER:"0.9.944"};imgLiquid.bgs_Available=!1,imgLiquid.bgs_CheckRunned=!1,imgLiquid.injectCss=".imgLiquid img {visibility:hidden}",function(i){function t(){if(!imgLiquid.bgs_CheckRunned){imgLiquid.bgs_CheckRunned=!0;var t=i('<span style="background-size:cover" />');i("body").append(t),!function(){var i=t[0];if(i&&window.getComputedStyle){var e=window.getComputedStyle(i,null);e&&e.backgroundSize&&(imgLiquid.bgs_Available="cover"===e.backgroundSize)}}(),t.remove()}}i.fn.extend({imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"top",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},t();var a=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(t){function e(){-1===u.css("background-image").indexOf(encodeURI(m.attr("src")))&&u.css({"background-image":'url("'+encodeURI(m.attr("src"))+'")'}),u.css({"background-size":g.fill?"cover":"contain","background-position":(g.horizontalAlign+" "+g.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",u).css({display:"block",width:"100%",height:"100%"}),i("img",u).css({display:"none"}),g.onItemFinish&&g.onItemFinish(t,u,m),u.addClass("imgLiquid_bgSize"),u.addClass("imgLiquid_ready"),l()}function d(){function e(){m.data("imgLiquid_error")||m.data("imgLiquid_loaded")||m.data("imgLiquid_oldProcessed")||(u.is(":visible")&&m[0].complete&&m[0].width>0&&m[0].height>0?(m.data("imgLiquid_loaded",!0),setTimeout(r,t*g.delay)):setTimeout(e,g.timecheckvisibility))}if(m.data("oldSrc")&&m.data("oldSrc")!==m.attr("src")){var a=m.clone().removeAttr("style");return a.data("imgLiquid_settings",m.data("imgLiquid_settings")),m.parent().prepend(a),m.remove(),m=a,m[0].width=0,void setTimeout(d,10)}return m.data("imgLiquid_oldProcessed")?void r():(m.data("imgLiquid_oldProcessed",!1),m.data("oldSrc",m.attr("src")),i("img:not(:first)",u).css("display","none"),u.css({overflow:"hidden"}),m.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),m.on("error",n),m[0].onerror=n,e(),void o())}function o(){(g.responsive||m.data("imgLiquid_oldProcessed"))&&m.data("imgLiquid_settings")&&(g=m.data("imgLiquid_settings"),u.actualSize=u.get(0).offsetWidth+u.get(0).offsetHeight/1e4,u.sizeOld&&u.actualSize!==u.sizeOld&&r(),u.sizeOld=u.actualSize,setTimeout(o,g.responsiveCheckTime))}function n(){m.data("imgLiquid_error",!0),u.addClass("imgLiquid_error"),g.onItemError&&g.onItemError(t,u,m),l()}function s(){var i={};if(a.settings.useDataHtmlAttr){var t=u.attr("data-imgLiquid-fill"),e=u.attr("data-imgLiquid-horizontalAlign"),d=u.attr("data-imgLiquid-verticalAlign");("true"===t||"false"===t)&&(i.fill=Boolean("true"===t)),void 0===e||"left"!==e&&"center"!==e&&"right"!==e&&-1===e.indexOf("%")||(i.horizontalAlign=e),void 0===d||"top"!==d&&"bottom"!==d&&"center"!==d&&-1===d.indexOf("%")||(i.verticalAlign=d)}return imgLiquid.isIE&&a.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}function r(){var i,e,a,d,o,n,s,r,c=0,h=0,f=u.width(),v=u.height();void 0===m.data("owidth")&&m.data("owidth",m[0].width),void 0===m.data("oheight")&&m.data("oheight",m[0].height),g.fill===f/v>=m.data("owidth")/m.data("oheight")?(i="100%",e="auto",a=Math.floor(f),d=Math.floor(f*(m.data("oheight")/m.data("owidth")))):(i="auto",e="100%",a=Math.floor(v*(m.data("owidth")/m.data("oheight"))),d=Math.floor(v)),o=g.horizontalAlign.toLowerCase(),s=f-a,"left"===o&&(h=0),"center"===o&&(h=.5*s),"right"===o&&(h=s),-1!==o.indexOf("%")&&(o=parseInt(o.replace("%",""),10),o>0&&(h=.01*s*o)),n=g.verticalAlign.toLowerCase(),r=v-d,"left"===n&&(c=0),"center"===n&&(c=.5*r),"bottom"===n&&(c=r),-1!==n.indexOf("%")&&(n=parseInt(n.replace("%",""),10),n>0&&(c=.01*r*n)),g.hardPixels&&(i=a,e=d),m.css({width:i,height:e,"margin-left":Math.floor(h),"margin-top":Math.floor(c)}),m.data("imgLiquid_oldProcessed")||(m.fadeTo(g.fadeInTime,1),m.data("imgLiquid_oldProcessed",!0),g.removeBoxBackground&&u.css("background-image","none"),u.addClass("imgLiquid_nobgSize"),u.addClass("imgLiquid_ready")),g.onItemFinish&&g.onItemFinish(t,u,m),l()}function l(){t===a.length-1&&a.settings.onFinish&&a.settings.onFinish()}var g=a.settings,u=i(this),m=i("img:first",u);return m.length?(m.data("imgLiquid_settings")?(u.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"),g=i.extend({},m.data("imgLiquid_settings"),a.options)):g=i.extend({},a.settings,s()),m.data("imgLiquid_settings",g),g.onItemStart&&g.onItemStart(t,u,m),void(imgLiquid.bgs_Available&&g.useBackgroundSize?e():d())):void n()})}})}(jQuery),!function(){var i=imgLiquid.injectCss,t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}();
 // Generated by CoffeeScript 1.8.0
/**
@license Sticky-kit v1.1.1 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
*/(function(){var t,i;t=this.jQuery||window.jQuery,i=t(window),t.fn.stick_in_parent=function(o){var s,e,n,r,c,l,a,p,f,u,d;for(null==o&&(o={}),p=o.sticky_class,n=o.inner_scrolling,a=o.recalc_every,l=o.parent,c=o.offset_top,r=o.spacer,e=o.bottoming,null==c&&(c=0),null==l&&(l=void 0),null==n&&(n=!0),null==p&&(p="is_stuck"),null==e&&(e=!0),f=function(o,s,f,u,d,h,k,g){var v,m,y,_,b,w,x,C,I,z,A;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),w=o.parent(),null!=l&&(w=w.closest(l)),!w.length)throw"failed to find stick parent";if(y=!1,v=!1,z=null!=r?r&&o.closest(r):t("<div />"),z&&z.css("position",o.css("position")),x=function(){var t,i,e;if(!g)return t=parseInt(w.css("border-top-width"),10),i=parseInt(w.css("padding-top"),10),s=parseInt(w.css("padding-bottom"),10),f=w.offset().top+t+i,u=w.height(),y&&(y=!1,v=!1,null==r&&(o.insertAfter(z),z.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(p),e=!0),d=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-c,h=o.outerHeight(!0),k=o.css("float"),z&&z.css({width:o.outerWidth(!0),height:h,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":k}),e?A():void 0},x(),h!==u)return _=void 0,b=c,I=a,A=function(){var t,l,m,C,A;if(!g)return null!=I&&(I-=1,0>=I&&(I=a,x())),m=i.scrollTop(),null!=_&&(l=m-_),_=m,y?(e&&(C=m+h+b>u+f,v&&!C&&(v=!1,o.css({position:"fixed",bottom:"",top:b}).trigger("sticky_kit:unbottom"))),d>m&&(y=!1,b=c,null==r&&(("left"===k||"right"===k)&&o.insertAfter(z),z.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(p).trigger("sticky_kit:unstick")),n&&(A=i.height(),h+c>A&&(v||(b-=l,b=Math.max(A-h,b),b=Math.min(c,b),y&&o.css({top:b+"px"}))))):m>d&&(y=!0,t={position:"fixed",top:b},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(p),null==r&&(o.after(z),("left"===k||"right"===k)&&z.append(o)),o.trigger("sticky_kit:stick")),y&&e&&(null==C&&(C=m+h+b>u+f),!v&&C)?(v=!0,"static"===w.css("position")&&w.css({position:"relative"}),o.css({position:"absolute",bottom:s,top:"auto"}).trigger("sticky_kit:bottom")):void 0},C=function(){return x(),A()},m=function(){return g=!0,i.off("touchmove",A),i.off("scroll",A),i.off("resize",C),t(document.body).off("sticky_kit:recalc",C),o.off("sticky_kit:detach",m),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),w.position("position",""),y?(null==r&&(("left"===k||"right"===k)&&o.insertAfter(z),z.remove()),o.removeClass(p)):void 0},i.on("touchmove",A),i.on("scroll",A),i.on("resize",C),t(document.body).on("sticky_kit:recalc",C),o.on("sticky_kit:detach",m),setTimeout(A,0)}},u=0,d=this.length;d>u;u++)s=this[u],f(t(s));return this}}).call(this);
/*TOOLTIP*/
(function(e){e.fn.tipr=function(t){var n=e.extend({speed:200,css:".tipr_container_",mode:"top"},t);return this.each(function(){e(this).css(n.css);if(n.mode){var t=".tipr_container_";e(t).append(n.mode)}var t=".tipr_container_"+n.mode;var r=e(this).attr("title");e(this).attr("data-tip",r);e(this).attr("title","");e(this).hover(function(){var r='<div class="tipr_container_'+n.mode+'"><div class="tipr_point_'+n.mode+'"><div class="tipr_content">'+e(this).attr("data-tip")+"</div></div></div>";e("body").append(r);var i=e(this).offset();var s=e(t).outerWidth();var o=e(this).outerWidth();var u=e(t).outerHeight();var a=e(this).outerHeight();var f=e(this).height();var l=a/2-a-u/2-1;var c=a/2+4;var h=-(a+u/2+20);var p=o/2-s/2;var d=i.left-p-s-5;var v=i.left+p+s+10;var m=i.top+a;e(t).css("margin-left",p+"px");e(t).css("top",m+"px");if(n.mode=="left"){e(t).css("left",d+"px");e(t).css("margin-top",l+"px")}if(n.mode=="right"){e(t).css("left",v+"px");e(t).css("margin-top",l+"px")}if(n.mode=="top"||n.mode=="bottom"){e(t).css("left",i.left+"px");e(t).css("top",m+"px")}if(n.mode=="bottom"){}if(n.mode=="top"){e(t).css("margin-top",h+"px")}e(t).fadeIn(n.speed)},function(){e(t).remove()})})}})(jQuery);

// ========================================== CONTROLLER ====================================

$(document).ready(function() {
    $(".lqd").imgLiquid();
    var bodyWidth = $('body').width() - 30;
    $('.komentar_box iframe').css('width',bodyWidth);
    var myScrollPos = $('.header__bottom .menu-slide a.active').position().left - $('.header__bottom .menu-slide a.active').width();
    $('.header__bottom .menu-slide').animate({scrollLeft:myScrollPos});
});
// BACKTOP

var tbHeight = $('.top_banner').outerHeight();
$(window).bind('scroll', function() {

	let  blbHeight = $('#billboard').outerHeight() || 0;
	let  qcbHeight = $('.quickcb').outerHeight() || 0;
	let  megaHeight = $(".mega_bb").outerHeight() || 0;
	let  smbHeight = $(".smartbanner_new").outerHeight() || 0;
	let  uniHeight = qcbHeight+megaHeight+smbHeight+blbHeight;
	// console.log(uniHeight);
	if ( ($('#billboard').length > 0) || ($('.quickcb').length > 0) || ($(".mega_bb").length > 0) || ($(".smartbanner_new").length > 0) ) {
	
		if ($(this).scrollTop() >= uniHeight) {
	        $('.backtop').addClass('show');
	        $('.header__top, .menu__block, .menu__search').addClass('fixed');
          //add
	        $('.newsticker').addClass('sticky');
	    } else {
	        $('.backtop').removeClass('show');
	        $('.header__top, .menu__block, .menu__search').removeClass('fixed');
	        $('.newsticker').removeClass('sticky');
	    }

	} 
	else {
		if ($(this).scrollTop() >= 100) {
	        $('.backtop').addClass('show');
	        $('.header__top, .menu__block').addClass('fixed');
	    } else {
	        $('.backtop').removeClass('show');
	        $('.header__top, .menu__block').removeClass('fixed');
	    }
	}
    
});

//MENU 
$('.menu__icon').click(function() {
	$('.menu__icon, .menu__block, .main, .footer, .header__top').toggleClass('show');
  $('header').toggleClass('menu-show');
   $('.video-sticky').toggleClass('sticky');
	event.preventDefault();
});
$('.menu__block__list ul li').click(function() {
	$(this).toggleClass('show');
});
$('.menu__block__list ul li ul li').click(function() {
	$(this).parents('.menu__block__list ul li').removeClass('show');
});
$('.komentar_box_title').click(function() {
	$('.komentar_box').toggleClass('show');
});
// slider
// SLIDE VIDEO WP 
$('#slider1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider3').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider4').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider5').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider6').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
});
$('#slider_tv').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:true,
});
$('#slider_tv2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:true,
});
$('#slidercnbc').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:4000
});
$('#sliderdetik').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:4000
});
$('#sliderfokus').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:4000
});

//newsticker
$('#newsticker-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay:true,
  autoplaySpeed:4000,
  prevArrow: $('#prev_ns'),
  nextArrow: $('#next_ns')
});

/*SLIDE GALERI*/
$("#slide_galery").slick({
   
   prevArrow: $('#prev_f'),
   nextArrow: $('#next_f')
});
// TABS
$('#tab span').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('#tab span').removeClass('current');
	$('.tab__content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});
// CLOSE BANNER
$('.close-top-banner').click(function() {
	$('.banner__top').slideToggle('fast');
	$('.menu__block').css('top', '0');
	event.preventDefault();
});
// ANCHOR
$('.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 57
    }, 700);
    return false;
});


function resizeIframe(obj) {
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
/*S:MODALBOX*/
$(window).on('load', function() {
    $(".box_modal_full").click(function() {
        if ($('div').attr('id') == 'pop_box_now') {} else {
            $(this).removeAttr('href');
            var src = $(this).attr("alt");
            size = src.split('|');
            url = size[0],
                width = '100%',
                height = '100%'

            $("body").append("<div class='pop_box' id='pop_box_now'><iframe frameborder='0' id='framebox' src=''></iframe></div>");
            $("#framebox").animate({
                height: height,
                width: width,
            }, 0).attr('src', url).css('position', 'fixed').css('top', '0').css('left', '0');
            $("body").css('overflow', 'hidden');
        }
        rescale();
    });
    $(function() {
        $(".pop_container").wrapInner("<div id='pop_wrap'></div>");
        $('#pop_wrap').css('height', $(window).height());
        $('#pop_wrap').css('width', $('#pop_wrap').parent('.pop_container').width());
    });

    function rescale() {
        var size = { width: $(window).width(), height: $(window).height() }
        $('#pop_wrap').css('height', size.height);
    }
    $(window).bind("resize", rescale);
    function pop_next(src) {
        size = src.split('|');
        url = size[0],
            width = size[1],
            height = size[2],
            tops = 'calc(50% - ' + (height / 2) + 'px)';
        tops2 = '-webkit-calc(50% - ' + (height / 2) + 'px)';
        $("#framebox").animate({
            height: height,
            width: width,
        }, 0).attr('src', url).css('top', tops).css('top', tops2);
    };
});
function closepop() {
    $("#pop_box_now").remove();
    $("#pop_box2").hide();
    $("body").css('overflow', 'scroll');
};
$(".close_box").click(function() {
    closepop();
});
$(".close_box_in").click(function() {
    parent.closepop();
});
$(".pop_next").click(function() {
    var src = $(this).attr("alt");
    parent.pop_next(src);
});
// E: MODAL BOX 
$('.slider--fokus').find('.slick-dots').addClass('gtm_slider_fokus');
$('.slider--anj').find('.slick-dots').addClass('gtm_slider_akudanjakarta');
$('.slider--kanal').find('.slick-dots').addClass('gtm_slider_featuredbox_kanal');
$('.slider--infografis').find('.slick-dots').addClass('gtm_slider_infografis');
$('.slider--foto').find('.slick-dots').addClass('gtm_slider_foto');


$(document).ready(function() { 
  return $("[data-sticky_column]").stick_in_parent({
    parent: "[data-sticky_parent]",
    offset_top: 45,
    inner_scrolling: false
  })
  .on('sticky_kit:bottom', function(e) {
    $(this).parent().css('position', 'static');
  })
  .on('sticky_kit:unbottom', function(e) {
    $(this).parent().css('position', 'relative');
  });
});

$(document.body).trigger("sticky_kit:tick");

$(document).ready(function() { 
    $('.tip').tipr({ 
    });
});

if (matchMedia) {
  var mq = window.matchMedia('(min-width: 768px)');
  var l_share = $("#l_share .lvr_share");
  var lvr_hldt = $("#lvr_idhl .lvr_hl");
  
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {
  if (mq.matches) {
    
    l_share.appendTo("#l_share");
    l_share = null;
    lvr_hldt.appendTo("#lvr_idhl");
    lvr_hldt= null;

  } else {
    
    l_share = $("#l_share .lvr_share").detach(); //dimunculkan kembali
    l_share.appendTo("#l_share_bot");

    lvr_hldt = $("#lvr_idhl .lvr_hl").detach(); //dimunculkan kembali
    lvr_hldt.appendTo("#lvr_hl_top");
 
  }
};

if ($(window).width() < 768) {
    var iScrollPos = 0;
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var content_area = $("#lvr_stcar").height();
        var w_height = $(window).height();

        var iCurScrollPos = $(this).scrollTop();        

        if (windowpos >= (content_area - w_height)) {
            $(".lvr_share").addClass("share_mob");
        }
        else {
            $(".lvr_share").removeClass("share_mob");
        }
        return;
        
    });
}

if ($(window).width() < 768) {
    $('.lvr_notif').addClass('lvr_notif_b');


} else {
    $('.lvr_notif').removeClass('lvr_notif_b');
    /*scroll keyevent*/
    var lvr_height = $('.lvr_block_top').height();
    var win_height = $( window ).height();
    lvr_keyevent = (win_height-lvr_height-190) + 'px';
    $('.sld_lvr').css("max-height", lvr_keyevent).css("overflow-y","scroll");
     /*scroll keyevent*/
}

$('.lvr_notif a').click(function() {
    $('.lvr_notif').fadeOut("slow");
});

$( ".sb_close" ).click(function() {
  $(".smartbanner_new").remove();
});

$('#live-chat-btn').click(function() {
   $('.live-chat-container ').toggleClass('hide');
});

$(".search-icon").on("click",function(e){
  e.preventDefault();
  $(".menu__search").toggleClass("search-on");
});
$(".menu__search button").on("click",function(){
  $(".menu__search").toggleClass("search-on");
});

