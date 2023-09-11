document.getElementById('form-button').addEventListener("click", function () {
    
  var rect = document.getElementById('form-button').getBoundingClientRect();
console.log(rect.top, rect.left);
var ycoordinate = rect.top;
var xcoordinate = rect.left;
  
  emojisplosion({
      emojis: ["🤣", "😇", "😛", "🤓"],
      position: {
          x: xcoordinate + 40,
          y: ycoordinate,
      },
  });
});

const observer = lozad('.lozad', {});

observer.observe();

// Mobile Image Slider

function ImagesliderApp(el) {
this.el = el;

el.addEventListener("mousemove", updateSlider.bind(this));
el.addEventListener("touchstart", updateSlider.bind(this));
el.addEventListener("touchmove", updateSlider.bind(this));
}

function updateSlider(e) {
const rightImageContainer = this.el.querySelector(".hero-wrapper");
const {
  left,
  width
} = rightImageContainer.getBoundingClientRect();
const pageX = e.type == "mousemove" ? e.pageX : e.changedTouches[0].pageX;
const position = ((pageX - left) / width) * 100;

if (position < 100 && position > 0) {
  this.el.querySelector(
    ".hero-clipping-wrapper"
  ).style.width = `${position}%`;
  this.el.querySelector(".handlebar_wrapper").style.left = `${position}%`;
}
}

var hero = document.getElementById("hero-section");

setTimeout(function() {
ImagesliderApp(hero);
}, 4000)


// Tabs

var tabTimeout;
var menu1 = ".cc-menu-section-1";
var links1 = ".cc-links-section-1";
var menu2 = ".cc-menu-section-2";
var links2 = ".cc-links-section-2";
var menu3 = ".cc-menu-section-3";
var links3 = ".cc-links-section-3";
var menu4 = ".cc-menu-section-4";
var links4 = ".cc-links-section-4";

// define loop - cycle through all tabs
function tabLoop(tabsMenu, tabsLink) {
tabTimeout = setTimeout(function () {
  var $next = $(tabsMenu).children(".w--current:first").next();

  if ($next.length) {
    $next.click(); // click resets timeout, so no need for interval
  } else {
    $(`${tabsLink}:first`).click();
  }
}, 10000); // 10 second tab loop
}

// reset timeout if a tab is clicked
$(".cc-links-section-1").click(function () {
clearTimeout(tabTimeout);
tabLoop(menu1, links1);
});
$(".cc-links-section-2").click(function () {
clearTimeout(tabTimeout);
tabLoop(menu2, links2);
});
$(".cc-links-section-3").click(function () {
clearTimeout(tabTimeout);
tabLoop(menu3, links3);
});
$(".cc-links-section-4").click(function () {
clearTimeout(tabTimeout);
tabLoop(menu4, links4);
});

var tabs1Observer = new IntersectionObserver(
function (entries) {
  if (entries[0]["isIntersecting"] === true) {
    clearTimeout(tabTimeout);
    tabLoop(menu1, links1);
  } else {
    clearTimeout(tabTimeout);
  }
},
{ threshold: [0.5] }
);

tabs1Observer.observe(document.querySelector("#section-1_grid"));

var tabs2Observer = new IntersectionObserver(
function (entries) {
  if (entries[0]["isIntersecting"] === true) {
    clearTimeout(tabTimeout);
    tabLoop(menu2, links2);
  } else {
    clearTimeout(tabTimeout);
  }
},
{ threshold: [0.5] }
);

tabs2Observer.observe(document.querySelector("#section-2_grid"));

var tabs3Observer = new IntersectionObserver(
function (entries) {
  if (entries[0]["isIntersecting"] === true) {
    clearTimeout(tabTimeout);
    tabLoop(menu3, links3);
  } else {
    clearTimeout(tabTimeout);
  }
},
{ threshold: [0.5] }
);

tabs3Observer.observe(document.querySelector("#section-3_grid"));

var tabs4Observer = new IntersectionObserver(
function (entries) {
  if (entries[0]["isIntersecting"] === true) {
    clearTimeout(tabTimeout);
    tabLoop(menu4, links4);
  } else {
    clearTimeout(tabTimeout);
  }
},
{ threshold: [0.5] }
);

tabs4Observer.observe(document.querySelector("#section-4_grid"));

document
.getElementById("tabs-content-1")
.addEventListener("mouseenter", function () {
  clearTimeout(tabTimeout);
});

document
.getElementById("tabs-content-1")
.addEventListener("mouseleave", function () {
  clearTimeout(tabTimeout);
  tabLoop(menu1, links1);
});

document
.getElementById("tabs-content-2")
.addEventListener("mouseenter", function () {
  clearTimeout(tabTimeout);
});

document
.getElementById("tabs-content-2")
.addEventListener("mouseleave", function () {
  clearTimeout(tabTimeout);
  tabLoop(menu2, links2);
});

document
.getElementById("tabs-content-3")
.addEventListener("mouseenter", function () {
  clearTimeout(tabTimeout);
});

document
.getElementById("tabs-content-3")
.addEventListener("mouseleave", function () {
  clearTimeout(tabTimeout);
  tabLoop(menu3, links3);
});

document
.getElementById("tabs-content-4")
.addEventListener("mouseenter", function () {
  clearTimeout(tabTimeout);
});

document
.getElementById("tabs-content-4")
.addEventListener("mouseleave", function () {
  clearTimeout(tabTimeout);
  tabLoop(menu4, links4);
});