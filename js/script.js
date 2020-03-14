$(document).ready(function(){
  $(".Hompage-slider").owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
  	dots:false,
  	autoplay:true,
  	navText: [
        '<i class="fa fa-long-arrow-alt-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-alt-right" aria-hidden="true"></i>'],
  });
  $(".team-member-list, .testimonial-list").owlCarousel({
  	items:3,
  	margin:20,
  	loop:true,
  	nav:false,
  	dots:true,
  	autoplay:true,
  });
  $(".logos").owlCarousel({
  	items:5,
  	margin:20,
  	loop:true,
  	nav:false,
  	dots:false,
  	autoplay:true,
  });

  $('.web-design').circleProgress({
    value: 0.9,
    size: 270,
    thickness: 5,
    fill: '#0bbbc1'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
  $('#design-2').circleProgress({
    value: 0.95,
    size: 270,
    thickness: 5,
    fill: '#0bbbc1'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
  $('#design-3').circleProgress({
    value: 0.85,
    size: 270,
    thickness: 5,
    fill: '#0bbbc1'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-no').html(Math.round(85 * progress) + '<i>%</i>');
  });
});