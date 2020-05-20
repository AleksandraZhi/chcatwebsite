

var icon = document.querySelector(".rockstar i");

function shrinkIcon(a, b) {
  // var icon = document.querySelector(".rockstar i");
  icon.style.fontSize = a;
  icon.style.padding = b;
}

icon.addEventListener("mouseover", function() {
  setTimeout(shrinkIcon("250%", "7.5%"), 10000);
  setTimeout(shrinkIcon("200%", "10%"), 50000);
  setTimeout(shrinkIcon("150%", "13%"), 100000);
  setTimeout(shrinkIcon("100%", "15%"), 150000);
  setTimeout(shrinkIcon("150%", "13%"), 200000);
  // setTimeout(shrinkIcon("200%", "10%"), 25000);
  // setTimeout(shrinkIcon("250%", "7.5%"), 30000);
  // setTimeout(shrinkIcon("300%", "5%"), 35000);
})
