var icon = document.querySelector(".broken-hearts i");
icon.addEventListener("mouseover", function() {
  var myIcon = document.getElementsByClassName("fa-heart-broken")[0];
  myIcon.className = "fas fa-heart";
  setTimeout(function () {
    myIcon.className = "fas fa-heart-broken";
  }, 800);

})


//
//
// var icon = document.querySelector(".rockstar i");
//
// function shrinkIcon() {
//   // var icon = document.querySelector(".rockstar i");
//   var a, b;
//   icon.style.fontSize = a;
//   icon.style.padding = b;
//   icon.style.transition = "font-size 0.3s, padding 0.3s";
// }
//
// icon.addEventListener("mouseover", function() {
//
//   var i, a, b;
//   for (i=0; i<5; i++) {
//     a -= 50;
//     b -= 3;
//     shrinkIcon(`${a}%`, `${b}%`);
//   }
//
//   for (i=0; i<5; i++) {
//     a += 50;
//     b += 3;
//     shrinkIcon(`${a}%`, `${b}%`);
//   }
// });


// var i, iconSize, iconPadding;
// iconSize = 300;
// iconPadding = 7.5;
// delay = 1000;
// for (i=0; i<8; i++) {
//   console.log(i);
//   iconSize -= 10;
//   iconSize += 3;
//   delay += 5000;
//   setInterval(shrinkIcon(`${iconSize}%`, `${iconPadding}%`), delay);
// }
// });


// icon.addEventListener("mouseover", function() {
//   setTimeout(shrinkIcon("250%", "7.5%"), 1000);
//   setTimeout(shrinkIcon("200%", "10%"), 2000);
  // setTimeout(shrinkIcon("150%", "13%"), 100000);
  // setTimeout(shrinkIcon("100%", "15%"), 150000);
  // setTimeout(shrinkIcon("150%", "13%"), 200000);
  // setTimeout(shrinkIcon("200%", "10%"), 25000);
  // setTimeout(shrinkIcon("250%", "7.5%"), 30000);
  // setTimeout(shrinkIcon("300%", "5%"), 35000);
