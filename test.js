var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
     document.querySelector("header").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}


(function() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;
  };
})();
