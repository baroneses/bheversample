var bannerMob=$('.box-btn-bottom-mobile');bannerMob.hide();var startObj=$("#start");var boxUpdate=$('.box-atualizacao');var startBanner=jQuery(document).height()/2;startBanner=startBanner>5000?5000:startBanner;function throttle(func,interval){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=false;};if(!timeout){func.apply(context,args)
timeout=true;setTimeout(later,interval)}}}
var onScroll=throttle(function(){if($(this).scrollTop()>=startBanner){bannerMob.show();$(window).off('scroll',onScroll);}},300);$(window).on('scroll',onScroll);const starEls=document.querySelectorAll('.star.rating');starEls.forEach(star=>{star.addEventListener('click',function(e){let starEl=e.currentTarget;console.log(starEl.parentNode.dataset.stars+", "+starEl.dataset.rating);starEl.parentNode.setAttribute('data-stars',starEl.dataset.rating);});})
$(document).ready(function(){$('.icon-search').click(function(){$('.search').toggleClass('active')})})