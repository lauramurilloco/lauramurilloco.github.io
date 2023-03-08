/*
gsap.from (".franja", {duration:2 , scaleX:0,})
gsap.from ("#p1", {duration:.5, y:-55, delay:2.5,});
gsap.from ("#p2", {
	duration:.5, y:55, delay:2.7,});
gsap.from (".bmenu ul li", {
	duration:2, y:60, stagger:.3, delay:3, ease: "bounce.out",});
*/
var anim1 = gsap.timeline();
anim1.from (".franja", {duration:1.25, scaleX:0})
.from("#p1", {duration:.3, y:-55})
.from("#p2", {duration:.3, y:55}, "-=.25")
.from(".bmenu ul li", {duration:.3, stagger:.2, scaleX:0, opacity:0})





// `logoDimensions` is an object containing the dimensions
// of the main logo element
function blendLogoMasks(amount, isDark) {
  if (maskCache.isDark === isDark && maskCache.amount === amount) {
    return;
  }
  var alt = {};
  var main = {};
  if (isDark) {
    alt.y = amount + 1;
    alt.height = logoDimensions.height - amount;
    main.y = 0;
    main.height = amount;
  } else {
    alt.y = 0;
    alt.height = amount;
    main.y = amount + 1;
    main.height = logoDimensions.height - amount;
  }
  $("#logo-alt-mask rect").attr({
    y: alt.y,
    height: alt.height
  });
  $("#logo-main-mask rect").attr({
    y: main.y,
    height: main.height
  });
  maskCache.isDark = isDark;
  maskCache.amount = amount;
}
// This would generate a logo with the first 100px of white
// and the rest as dark blue
blendLogoMasks(100, false);

function generateSectionsMap() {
  var sections = [];
  $sections.each(function() {
    var top = $(this).offset().top;
    sections.push({
      $el: this,
      end: top + $(this).outerHeight(),
      isDark: $(this).hasClass("js-section-dark")
    });
  });
  return sections;
}



