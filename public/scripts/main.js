// Keeping the navbar on the top of the website if being viewed on desktop
if(window.innerWidth >= 1000){
  window.onscroll = function(){
    if((window.pageYOffset != 0) || (document.documentElement.scrollTop != 0) || (document.body.scrollTop != 0)) {
      document.querySelector(".navBar").setAttribute("id", "fixedNav");
    } else{
      document.querySelector(".navBar").removeAttribute("id");
    }
  }
} else{
  var navList = document.querySelector(".navList");
  navList.setAttribute("class", "hide");
  document.querySelector(".menuBtn").onclick = function(){
    if(navList.classList.contains("hide")){
      navList.removeAttribute("class");
    } else{
      navList.setAttribute("class", "hide");
    }
  };
}

// if(window.innerWidth < 1000){
//     var navList = document.querySelector(".navList");
//     navList.setAttribute("class", "hide");
//     document.querySelector(".menuBtn").onclick = function(){
//       if(navList.classList.contains("hide")){
//         navList.removeAttribute("class");
//       } else{
//         navList.setAttribute("class", "hide");
//       }
//     };
// }
